import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { DataView as DataviewDHX } from 'dhx-suite';

@Component({
  selector: 'app-dataview',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class DataviewComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: DataviewDHX;
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

  ngOnInit() {
    this.toolbar = new DataviewDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: this.renderTemplate,
      itemsInRow: 6
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
