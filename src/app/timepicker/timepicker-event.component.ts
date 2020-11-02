import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Timepicker as TimepickerDHX } from "dhx-suite";

@Component({
  selector: "app-timepicker-event",
  template: ` <div class="component-wrapper">
    <div #widget style="height: 310px"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
      <div class="events-list--element" *ngFor="let event of eventsList">
        <p>{{ event.name }}</p>
        <p>{{ event.payload }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class TimePickerEventsComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  timepicker: TimepickerDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.timepicker = new TimepickerDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered",
      controls: true,
    });

    this.timepicker.events.on("change", value => this.logEvent(value, "change"));
    this.timepicker.events.on("afterClose", value => this.logEvent(JSON.stringify(value, null, 2), "afterClose");
    this.timepicker.events.on("beforeClose", value => this.logEvent(JSON.stringify(value, null, 2), "beforeClose");
    this.timepicker.events.on("beforeApply", value => this.logEvent(JSON.stringify(value, null, 2), "beforeApply"));
    this.timepicker.events.on("afterApply", value => this.logEvent(JSON.stringify(value, null, 2), "afterApply"));
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
