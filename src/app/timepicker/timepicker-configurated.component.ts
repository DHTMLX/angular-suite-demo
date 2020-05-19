import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Timepicker as TimepickerDHX} from 'dhx-suite';

@Component({
  selector: 'app-timepicker-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './timepicker.scss'],
})
export class TimePickerConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  timepicker: TimepickerDHX;
  wait: Promise<void>;


  ngOnInit() {
    this.timepicker = new TimepickerDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
      controls: true,
      timeFormat: 12,
    });
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
