import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { DataView as DataviewDHX, DataCollection } from 'dhx-suite';

@Component({
  selector: 'app-dataview-data',
  template: `
    <section class="dhx-container">
      <div class="dhx-container--button">
        <button (click)="handleClick('reset')" class="custom-button">Reset</button>
        <button (click)="handleClick('remove')" class="custom-button">Remove first item</button>
      </div>
      <div #widget style="height: 400px; padding: 0 24px"></div>
    </section>`,
  styleUrls: ['../app.component.scss'],

})
export class DataviewDataComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  dataview: DataviewDHX;
  wait: Promise<void>;

  data = new DataCollection();

  handleClick = (action) => {
    if (action==='reset') {
      this.data.removeAll();
      this.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
    } else if (action==='remove') {
      this.data.remove(this.data.getId(0));
    }
  };

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
    this.dataview = new DataviewDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: this.renderTemplate,
      itemsInRow: 4,
      gap: 10,
      data: this.data
    });

    this.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
  }

  ngOnDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  }
}
