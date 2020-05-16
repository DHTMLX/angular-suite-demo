import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Colorpicker as ColorpickerDHX} from 'dhx-suite';

@Component({
  selector: 'app-colorpicker-configurated-cdn',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class ColorpickerComponentConfigurated implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  colorpicker: any;
  wait: Promise<void>;

  ngOnInit() {
    this.colorpicker = new ColorpickerDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
      customColors: ['#1d2de7', '#ab31ff', '#a3fa76']
    });
  }

  ngOnDestroy() {
    if (this.colorpicker) {
      this.colorpicker.destructor();
    }
  }
}
