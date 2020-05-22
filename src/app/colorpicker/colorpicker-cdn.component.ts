import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-colorpicker-cdn',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class ColorPickerCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  colorPicker: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.colorPicker = new dhx.Colorpicker(this.container.nativeElement, { grayShades: true });
      this.ready.emit({ colorPicker: this.colorPicker });
    });
  }

  ngOnDestroy() {
    if (this.colorPicker) {
      this.colorPicker.destructor();
    }
  }
}
