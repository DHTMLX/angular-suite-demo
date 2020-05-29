import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Ribbon as RibbonDHX } from 'dhx-suite';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-ribbon-cdn',
  template: `<div #widget></div>`,
  styleUrls: ['../app.component.scss'],
})
export class RibbonCDNComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  ribbon: RibbonDHX;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.ribbon = new dhx.Ribbon(this.container.nativeElement, {
        css: 'dhx_widget--bordered dhx_widget--bg_white',
      });
      this.ready.emit({ribbon: this.ribbon});
      this.ribbon.data.load('https://dhtmlx.github.io/react-widgets/static/ribbon.json');
    });
  }

  ngOnDestroy() {
    if (this.ribbon) {
      this.ribbon.destructor();
    }
  }
}
