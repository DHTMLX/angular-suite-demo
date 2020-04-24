import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Slider as SliderDHX } from 'dhx-suite';

@Component({
    selector: 'app-timepicker-cdn',
    template: `<div>
    <div #widget class='container'></div>
    <div class="events-list-wrapper">
        <div *ngFor='let event of eventsList'>
            <p>{{event.name}}</p>
            <p>{{event.payload}}</p>
        </div>
    </div>
</div>`,
    styleUrls: [ './slider.scss' ],
})
export class SliderEventsComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    timepicker: SliderDHX;
    wait: Promise<void>;

    eventsList = [];

    logEvent = (payload, name: string) => {
        this.eventsList = [ { name, payload } ].concat(this.eventsList);
    };

    ngOnInit() {
        this.timepicker = new SliderDHX(this.container.nativeElement, {});

        this.timepicker.events.on('change', (id) => this.logEvent(id, 'change'));
        this.timepicker.events.on('mousedown', (id) => this.logEvent(id, 'mousedown'));
        this.timepicker.events.on('mouseup', (id) => this.logEvent(id, 'mouseup'));
    }

    ngOnDestroy() {
        if (this.timepicker) {
            this.timepicker.destructor();
        }
    }
}
