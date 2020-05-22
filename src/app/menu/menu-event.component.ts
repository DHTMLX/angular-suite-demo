import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Menu as MenuDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-menu-event',
  template: `
    <div class="component-wrapper">
      <div #widget class='widget-box-wide'></div>
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
export class MenuEventComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  menu: MenuDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.menu = new MenuDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
    });
    this.menu.data.load(`https://dhtmlx.github.io/react-widgets/static/menu.json`);

    this.menu.events.on('click', (id) => this.logEvent(id, 'click'));
    this.menu.events.on('openMenu', (id) => this.logEvent(id, 'openMenu'));
  }

  ngOnDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  }
}
