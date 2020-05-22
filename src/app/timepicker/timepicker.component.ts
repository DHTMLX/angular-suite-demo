import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Timepicker as TimepickerDHX} from 'dhx-suite';

@Component({
  selector: 'app-timepicker',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './timepicker.scss'],
})
export class TimePickerComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  timepicker: TimepickerDHX;
  wait: Promise<void>;


  ngOnInit() {
    this.timepicker = new TimepickerDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
    });
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
