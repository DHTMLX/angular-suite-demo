import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Timepicker as TimepickerDHX } from 'dhx-suite';

@Component({
    selector: 'app-timepicker-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: [ './timepicker.scss' ],
})
export class TimePickerConfiguratedComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    timepicker: TimepickerDHX;
    wait: Promise<void>;

    @Output() ready: EventEmitter<any> = new EventEmitter();

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
