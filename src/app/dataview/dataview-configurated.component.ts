import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {DataView as DataviewDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-dataview-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class DataviewConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: DataviewDHX;
  wait: Promise<void>;

  renderTemplate = (item) => `<div class='item_wrap item-wrap--grid'>
    <img
        class='image'
        style="max-width: 120px"
        src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
    />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>`;

  ngOnInit() {
    this.toolbar = new DataviewDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: this.renderTemplate,
      itemsInRow: 6,
      gap: 20,
      keyNavigation: true,
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
