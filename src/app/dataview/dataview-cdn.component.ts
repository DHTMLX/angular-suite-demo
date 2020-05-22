import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { DataView as DataviewDHX } from 'dhx-suite';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-dataview-cdn',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class DataviewCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  dataview: DataviewDHX;
  wait: Promise<void>;

  renderTemplate = (item) => `
    <div class='item_wrap item-wrap--grid'>
      <img
        class='image'
        style="max-width: 80px"
        src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
      />
      <h2 class='title'>${item.title}</h2>
      <div>${item.short}</div>
    </div>
  `;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.dataview = new DataviewDHX(this.container.nativeElement, {
        css: 'dhx_widget--bordered dhx_widget--bg_white',
        template: this.renderTemplate,
        itemsInRow: 6,
      });

      this.ready.emit({dataview: this.dataview});
      this.dataview.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
    });
  }

  ngOnDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  }
}
