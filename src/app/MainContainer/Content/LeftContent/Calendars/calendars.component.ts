import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Calendar, Timepicker } from '@dhx/trial-suite';

@Component({
  selector: 'app-calendars',
  templateUrl: `<div class="calendars-wrapper">
                  <div class="wrapper dhx_layout_calendar_cell" #week_container></div>
                  <div class="wrapper dhx_layout_calendar_cell" #timepicker_container></div>
                  <div class="wrapper dhx_layout_calendar_cell" #year_container></div>
                </div>`,
})
export class CalendarsComponent implements OnInit {
  @ViewChild('weekNode', { static: true }) weekNode!: ElementRef;
  @ViewChild('timepickerNode', { static: true }) timepickerNode!: ElementRef;
  @ViewChild('yearNode', { static: true }) yearNode!: ElementRef;
  weekCalendar: any;
  timepicker: any;
  yearCalendar: any;

  ngOnInit() {
    this.weekCalendar = new Calendar(this.weekNode.nativeElement, {
      weekStart: 'monday',
      timePicker: true,
      range: true,
      value: [new Date(), new Date(Date.now() + 200000000)]
    });
    this.timepicker = new Timepicker(this.timepickerNode.nativeElement, {
      controls: true,
      value: new Date()
    });
    this.yearCalendar = new Calendar(this.yearNode.nativeElement, {
      timePicker: true,
      mode: 'year',
      value: new Date()
    });
  }

  ngOnDestroy() {
    this.weekCalendar && this.weekCalendar.destructor();
    this.timepicker && this.timepicker.destructor();
    this.yearCalendar && this.yearCalendar.destructor();
  }
}
