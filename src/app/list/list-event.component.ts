import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { List as ListDHX } from 'dhx-suite';

@Component({
  selector: 'app-list-event',
  template: `
    <div class="component-wrapper">
      <div #widget></div>
      <div class="events-list events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class ListEventComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  list: ListDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  }

  ngOnInit() {
    this.list = new ListDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      template: (item) => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      dragMode: 'both',
      editable: true,
    });

    this.list.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);

    this.list.events.on('click', (id) => this.logEvent(id, 'click'));
    this.list.events.on('focusChange', (index, id) => {
      const info = {index, id};
      this.logEvent(JSON.stringify(info), 'focusChange');
    });
    this.list.events.on('beforeDrag', (id) => this.logEvent(id, 'beforeDrag'));
    this.list.events.on('beforeDrop', (id) => this.logEvent(id, 'beforeDrop'));
    this.list.events.on('dragStart', (id) => this.logEvent(id, 'dragStart'));
    this.list.events.on('dragEnd', (id) => this.logEvent(id, 'dragEnd'));
    this.list.events.on('canDrop', (id) => this.logEvent(id, 'canDrop'));
    this.list.events.on('cancelDrop', (id) => this.logEvent(id, 'cancelDrop'));
    this.list.events.on('dropComplete', (id) => this.logEvent(id, 'dropComplete'));
    this.list.events.on('dragOut', (id) => this.logEvent(id, 'dragOut'));
    this.list.events.on('dragIn', (id) => this.logEvent(id, 'dragIn'));
    this.list.events.on('beforeEditStart', (value, id) => {
      const info = {value, id};
      this.logEvent(JSON.stringify(info), 'beforeEditStart');
    });
    this.list.events.on('afterEditStart', (id) => this.logEvent(id, 'afterEditStart'));
    this.list.events.on('beforeEditEnd', (value, id) => {
      const info = {value, id};
      this.logEvent(JSON.stringify(info), 'beforeEditEnd');
    });
    this.list.events.on('afterEditEnd', (value, id) => {
      const info = {value, id};
      this.logEvent(JSON.stringify(info), 'afterEditEnd');
    });
    this.list.events.on('doubleClick', (id) => this.logEvent(id, 'doubleClick'));
    this.list.events.on('itemRightClick', (id) => this.logEvent(id, 'itemRightClick'));
    this.list.events.on('itemMouseOver', (id) => this.logEvent(id, 'itemMouseOver'));
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
