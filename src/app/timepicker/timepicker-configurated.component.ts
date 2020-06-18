import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Timepicker as TimepickerDHX } from "dhx-suite";

@Component({
  selector: "app-timepicker-configurated",
  template: `<div #widget></div>`,
})
export class TimePickerConfiguratedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  timepicker: TimepickerDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.timepicker = new TimepickerDHX(this.container.nativeElement, {
      ...this.options,
    });
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
