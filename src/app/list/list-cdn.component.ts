import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
  selector: 'app-list-cdn',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './list.scss'],
})
export class ListCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  list: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.list = new dhx.List(this.container.nativeElement, {
        css: 'dhx_widget--bordered dhx_widget--bg_white',
        template: (item) => `<span><strong>${item.title}</strong> ${item.short}</span>`,
        height: 400,
      });
      this.list.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
      this.ready.emit({list: this.list});
    });
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
