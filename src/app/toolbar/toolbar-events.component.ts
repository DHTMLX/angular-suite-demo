import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Toolbar as ToolbarDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-toolbar-event',
  template: `
      <div class="component-wrapper">
          <div #widget class='widget-box-wide slider-container'></div>
          <div class="events-list-wrapper">
              <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
              <div class="events-list--element" *ngFor='let event of eventsList'>
                  <p>{{event.name}}</p>
                  <p>{{event.payload}}</p>
              </div>
          </div>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class ToolbarEventsComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: ToolbarDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.toolbar = new ToolbarDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
      controls: true,
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/toolbar.json');

    this.toolbar.events.on('click', (id) => this.logEvent(id, 'click'));

    this.toolbar.events.on('inputCreated', (id) => this.logEvent(id, 'inputCreated'));
    this.toolbar.events.on('openMenu', (id) => this.logEvent(id, 'openmenu'));
    this.toolbar.events.on('inputFocus', (id) => this.logEvent(id, 'inputFocus'));
    this.toolbar.events.on('inputBlur', (id) => this.logEvent(id, 'inputBlur'));
    this.toolbar.events.on('afterHide', (id) => this.logEvent(id, 'afterHide'));
    this.toolbar.events.on('beforeHide', (id) => this.logEvent(id, 'beforeHide'));
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
