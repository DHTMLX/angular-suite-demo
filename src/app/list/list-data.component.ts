import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { List as ListDHX, DataCollection } from 'dhx-suite';

@Component({
  selector: 'app-list-data',
  template: `
    <section>
      <div class="dhx-container--button">
        <button (click)="handleClick('reset')" class="custom-button">Reset</button>
        <button (click)="handleClick('remove')" class="custom-button">Remove first item</button>
      </div>
      <div #widget style="height: 400px"></div>
    </section>`,
  styleUrls: ['../app.component.scss'],
})
export class ListDataComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  list: ListDHX;
  wait: Promise<void>;
  data = new DataCollection();

  handleClick = (action) => {
    if (action==='remove') {
      this.data.remove(this.data.getId(0));
    } else if (action==='reset') {
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
    this.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
