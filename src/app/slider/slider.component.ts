import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Slider as SliderDHX } from 'dhx-suite';

@Component({
    selector: 'app-timepicker-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: [ './slider.scss' ],
})
export class SliderComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    slider: SliderDHX;
    wait: Promise<void>;

    ngOnInit() {
        this.slider = new SliderDHX(this.container.nativeElement, {
        });
    }

    ngOnDestroy() {
        if (this.slider) {
            this.slider.destructor();
        }
    }
}
