import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-calendar-cdn",
  template: `<div #widget></div>`,
})
export class CalendarCDNComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  calendar: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.calendar = new dhx.Calendar(this.container.nativeElement, {
        css: "dhx_widget--bordered",
        value: new Date(),
      });

      this.ready.emit({ colorPicker: this.calendar });
    });
  }

  ngOnDestroy() {
    this.calendar && this.calendar.destructor();
  }
}
