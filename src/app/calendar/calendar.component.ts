import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Calendar as CalendarDHX } from 'dhx-suite';

@Component({
    selector: 'app-calendar',
    template: `<div #widget></div>`,
})
export class CalendarComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    calendar: CalendarDHX;
    wait: Promise<void>;

    @Output() ready: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
      this.calendar = new CalendarDHX(this.container.nativeElement, {
        css: 'dhx_widget--bordered',
        value: new Date(),
      });
    }

    ngOnDestroy() {
      this.calendar && this.calendar.destructor();
    }
}
