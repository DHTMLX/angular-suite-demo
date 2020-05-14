import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {List as ListDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-list-data',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
          <div>
              <button (click)="handleClick('remove')" [disabled]="!this.list.getFocus()">Remove</button>
              <button (click)="handleClick('reset')">Reset</button>
          </div>
      </div>`,
  styleUrls: ['./list.scss'],
})
export class ListDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  list: ListDHX;
  wait: Promise<void>;
  data = new DataCollection();

  constructor() {
    this.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
  }

  handleClick = (action) => {
    if (action === 'remove') {
      this.data.remove(this.list.getFocusItem().id);
    } else if (action === 'reset') {
      this.data.removeAll();
      this.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
    }
  };

  ngOnInit() {
    this.list = new ListDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: (item) => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      data: this.data
    });
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
