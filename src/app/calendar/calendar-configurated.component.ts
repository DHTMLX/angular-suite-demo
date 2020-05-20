import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {Calendar as CalendarDHX} from 'dhx-suite';
import 'dhx-suite/codebase/suite.min.css';

@Component({
  selector: 'app-calendar-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class CalendarConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  calendar: CalendarDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.calendar = new CalendarDHX(this.container.nativeElement, {
      ...this.options
    });
  }

  ngOnDestroy() {
    if (this.calendar) {
      this.calendar.destructor();
    }
  }
}
