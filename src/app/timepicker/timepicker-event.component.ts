import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Timepicker as TimepickerDHX } from 'dhx-suite';

@Component({
  selector: 'app-timepicker-event',
  template: `
    <div class="component-wrapper">
      <div #widget class='widget-box-wide'></div>
      <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss', './timepicker.scss'],
})
export class TimePickerEventsComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  timepicker: TimepickerDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.timepicker = new TimepickerDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
      controls: true,
    });

    this.timepicker.events.on('change', (id) => this.logEvent(id, 'change'));
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
