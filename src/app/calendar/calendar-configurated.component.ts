import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Calendar } from "dhx-suite";

@Component({
  selector: "app-calendar-configurated",
  template: `<div #widget></div>`,
})
export class CalendarConfiguratedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  calendar: Calendar;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.calendar = new Calendar(this.container.nativeElement, {
      ...this.options,
    });
  }

  ngOnDestroy() {
    this.calendar && this.calendar.destructor();
  }
}
