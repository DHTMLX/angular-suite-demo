import {
    Output,
    Component,
    ViewChild,
    OnDestroy,
    ElementRef,
    EventEmitter,
} from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
    selector: 'app-richtext-cdn',
    template: `<div #widget class='widget-box-wide'></div>`,
})
export class ColorPickerCDNComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    colorPicker: any;
    wait: Promise<void>;

    @Output() ready: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.wait = fromCDN([
            'https://cdn.dhtmlx.com/suite/edge/suite.js',
            'https://cdn.dhtmlx.com/suite/edge/suite.css',
        ]).then(() => {
            this.colorPicker = new dhx.Colorpicker(this.container.nativeElement);

            this.ready.emit({ colorPicker: this.colorPicker });
        });
    }

    ngOnDestroy() {
        if (this.colorPicker) {
            this.colorPicker.destructor();
        }
    }
}
