import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {Slider as SliderDHX} from 'dhx-suite';

@Component({
  selector: 'app-slider-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './slider.scss'],
})
export class SliderConfiguraetedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  slider: SliderDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.slider = new SliderDHX(this.container.nativeElement, {
      ...this.options
    });
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  }
}
