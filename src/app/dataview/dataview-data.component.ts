import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {DataView as DataviewDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-dataview-data',
  template: `
      <div>
          <div class='btn-container'>
              <button (click)="handleClick('reset')">Reset</button>
              <button (click)="handleClick('remove')">Remove first item</button>
          </div>
          <div class='container-wide'>
              <div #widget class='widget-box-wide'></div>
          </div>
      </div>`,
  styleUrls: ['./dataview.scss'],
})
export class DataviewDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  dataview: DataviewDHX;
  wait: Promise<void>;

  data = new DataCollection();

  handleClick = (action) => {
    if (action === 'reset') {
      this.data.removeAll();
      this.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
    } else if (action === 'remove') {
      this.data.remove(this.data.getId(0));
    }
  };

  renderTemplate = (item) => `<div class='item_wrap item-wrap--grid'>
    <img
        class='image'
        style="max-width: 130px"
        src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
    />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>`;

  ngOnInit() {
    this.dataview = new DataviewDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: this.renderTemplate,
      itemsInRow: 6,
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
