import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import { Timepicker as TimepickerDHX } from "dhx-suite";
import fromCDN from "from-cdn";

@Component({
  selector: "app-timepicker-cdn",
  template: `<div #widget></div>`,
})
export class TimePickerCDNComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  timepicker: TimepickerDHX;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.timepicker = new dhx.Timepicker(this.container.nativeElement, {
        css: "dhx_widget--bordered",
      });
      this.ready.emit({ timepicker: this.timepicker });
    });
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
