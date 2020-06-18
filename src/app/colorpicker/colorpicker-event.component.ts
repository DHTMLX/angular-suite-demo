import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import { Colorpicker as ColorpickerDHX } from "dhx-suite";

@Component({
  selector: "app-colorpicker-event",
  template: ` <div class="component-wrapper">
    <div #widget></div>
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
export class ColorpickerEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  colorPicker: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.colorPicker = new ColorpickerDHX(this.container.nativeElement);
    this.ready.emit({ colorPicker: this.colorPicker });
    this.colorPicker.events.on("change", color => this.logEvent(color, "change"));
    this.colorPicker.events.on("modeChange", mode => this.logEvent(mode, "modeChange"));
    this.colorPicker.events.on("cancelClick", () => this.logEvent(null, "cancelClick"));
    this.colorPicker.events.on("apply", () => this.logEvent(null, "apply"));
  }

  ngOnDestroy() {
    if (this.colorPicker) {
      this.colorPicker.destructor();
    }
  }
}
