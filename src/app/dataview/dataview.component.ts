import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { DataView as DataviewDHX } from 'dhx-suite';

@Component({
  selector: 'app-dataview',
  template: `<div #widget style="height: 400px; padding: 0 24px"></div>`,
})
export class DataviewComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  toolbar: DataviewDHX;
  wait: Promise<void>;

  renderTemplate = (item) => `
    <div class="template template__container">
      <img
        class="template__image"
        src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
      />
      <h2 class="template__title">${item.title}</h2>
      <p class="template__description">${item.short}</з>
    </div>
  `;

  ngOnInit() {
    this.toolbar = new DataviewDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: this.renderTemplate,
      itemsInRow: 4,
      gap: 10
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
