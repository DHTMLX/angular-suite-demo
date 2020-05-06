import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
    selector: 'app-calendar-event-cdn',
    template: `<div class="component-wrapper">
        <div #widget class='widget-box-wide'></div>
        <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
            <div class="events-list--element" *ngFor='let event of eventsList'>
                <p>{{event.name}}</p>
                <p>{{event.payload}}</p>
            </div>
        </div>
    </div>`,
    styleUrls: [ '../app.component.scss' ],
})
export class CalendarEventComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    colorPicker: any;
    wait: Promise<void>;

    @Output() ready: EventEmitter<any> = new EventEmitter();

    eventsList = [];

    logEvent = (payload, name: string) => {
        this.eventsList = [ { name, payload } ].concat(this.eventsList);
    };

    constructor() {
        this.wait = fromCDN([
            'https://cdn.dhtmlx.com/suite/edge/suite.js',
            'https://cdn.dhtmlx.com/suite/edge/suite.css',
        ]).then(() => {
            this.colorPicker = new dhx.Calendar(this.container.nativeElement, {
                css: 'dhx_widget--bordered',
                value: new Date(),
            });

            this.ready.emit({ colorPicker: this.colorPicker });
            this.colorPicker.events.on('dateMouseOver', (date) =>
                this.logEvent(date, 'dateMouseOver'),
            );

            this.colorPicker.events.on('change', (id) => this.logEvent(id, 'change'));

            this.colorPicker.events.on('modeChange', (mode) => this.logEvent(mode, 'modeChange'));
            this.colorPicker.events.on('beforeChange', (id) =>
                this.logEvent(id.toString(), 'beforeChange'),
            );

            this.colorPicker.events.on('cancelClick', () => this.logEvent(null, 'cancelClick'));
            this.colorPicker.events.on('monthSelected', (month) =>
                this.logEvent(month + 1 + '', 'monthSelected'),
            );

            this.colorPicker.events.on('yearSelected', (year) =>
                this.logEvent(year.toString(), 'yearSelected'),
            );
        });
    }

    ngOnDestroy() {
        if (this.colorPicker) {
            this.colorPicker.destructor();
        }
    }
}
