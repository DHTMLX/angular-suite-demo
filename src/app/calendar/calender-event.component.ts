import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-calendar-event",
  template: `
    <div class="component-wrapper">
      <div #widget class="widget-box-wide"></div>
      <div class="events-list events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor="let event of eventsList">
          <p>{{ event.name }}</p>
          <p>{{ event.payload }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.scss"],
})
export class CalendarEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  calendar: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.calendar = new dhx.Calendar(this.container.nativeElement, {
        css: "dhx_widget--bordered",
        value: new Date(),
      });

      this.ready.emit({ calendar: this.calendar });
      this.calendar.events.on("beforeChange", id => this.logEvent(id.toString(), "beforeChange"));
      this.calendar.events.on("change", id => this.logEvent(id, "change"));
      this.calendar.events.on("cancelClick", () => this.logEvent(null, "cancelClick"));
      this.calendar.events.on("modeChange", mode => this.logEvent(mode, "modeChange"));
      this.calendar.events.on("dateMouseOver", date => this.logEvent(date, "dateMouseOver"));
      this.calendar.events.on("monthSelected", month => this.logEvent(month + 1 + "", "monthSelected"));
      this.calendar.events.on("yearSelected", year => this.logEvent(year.toString(), "yearSelected"));
    });
  }

  ngOnDestroy() {
    this.calendar && this.calendar.destructor();
  }
}
