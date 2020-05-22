import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
    selector: 'app-calendar-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls:['../app.component.scss']
})
export class CalendarCDNComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    calendar: any;
    wait: Promise<void>;

    @Output() ready: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.wait = fromCDN([
            'https://cdn.dhtmlx.com/suite/edge/suite.js',
            'https://cdn.dhtmlx.com/suite/edge/suite.css',
        ]).then(() => {
            this.calendar = new dhx.Calendar(this.container.nativeElement, {
                css: 'dhx_widget--bordered',
                value: new Date(),
            });

            this.ready.emit({ colorPicker: this.calendar });
        });
    }

    ngOnDestroy() {
        if (this.calendar) {
            this.calendar.destructor();
        }
    }
}
