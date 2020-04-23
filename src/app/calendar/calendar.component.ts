import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Calendar as CalendarDHX } from 'dhx-suite';
import 'dhx-suite/codebase/suite.min.css';

declare const dhx;

@Component({
    selector: 'app-richtext-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: [ '../app.component.scss' ],
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
        if (this.calendar) {
            this.calendar.destructor();
        }
    }
}
