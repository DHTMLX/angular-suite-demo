import { Calendar, Timepicker } from '@dhx/trial-suite';

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-calendars',
  template: `<div class="calendars-wrapper">
              <div class="wrapper dhx_layout_calendar_cell" #week_container></div>
              <div class="wrapper dhx_layout_calendar_cell" #timepicker_container></div>
              <div class="wrapper dhx_layout_calendar_cell" #year_container></div>
             </div>`,
  styleUrls: ['./calendars.component.css']
})

export class CalendarsComponent implements OnInit, OnDestroy {
  @ViewChild('week_container', { static: true }) week_container!: ElementRef;
  @ViewChild('timepicker_container', { static: true }) timepicker_container!: ElementRef;
  @ViewChild('year_container', { static: true }) year_container!: ElementRef;

  private _week_calendar!: Calendar;
  private _timepicker!: Timepicker;
  private _year_calendar!: Calendar;

  ngOnInit() {
    this._week_calendar = new Calendar(this.week_container.nativeElement, {
      weekStart: 'monday',
      timePicker: true,
      range: true,
      value: [new Date(), new Date(Date.now() + 200000000)]
    });

    this._timepicker = new Timepicker(this.timepicker_container.nativeElement, {
      controls: true,
      value: new Date()
    });

    this._year_calendar = new Calendar(this.year_container.nativeElement, {
      timePicker: true,
      mode: 'year',
      value: new Date()
    });
  }

  ngOnDestroy() {
    this._week_calendar?.destructor();
    this._timepicker?.destructor();
    this._year_calendar?.destructor();
  }
}
