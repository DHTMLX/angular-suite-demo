import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Ribbon as RibbonDHX, TreeCollection } from 'dhx-suite';

@Component({
  selector: 'app-ribbon-event',
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
export class RibbonEventsComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    ribbon: RibbonDHX;
    wait: Promise<void>;

    eventsList = [];

    logEvent = (payload, name: string) => {
        this.eventsList = [ { name, payload } ].concat(this.eventsList);
    };

    ngOnInit() {
        this.ribbon = new RibbonDHX(this.container.nativeElement, {
            css: 'dhx_widget--bordered dhx_widget--bg_white',
        });

        this.ribbon.data.load('https://dhtmlx.github.io/react-widgets/static/ribbon.json');

        this.ribbon.events.on('click', (id) => this.logEvent(id, 'click'));
        this.ribbon.events.on('inputCreated', (id) => this.logEvent(id, 'inputCreated'));
        this.ribbon.events.on('openMenu', (id) => this.logEvent(id, 'openmenu'));
        this.ribbon.events.on('inputFocus', (id) => this.logEvent(id, 'inputFocus'));
        this.ribbon.events.on('inputBlur', (id) => this.logEvent(id, 'inputBlur'));
        this.ribbon.events.on('beforeHide', (id) => this.logEvent(id, 'beforeHide'));
        this.ribbon.events.on('beforeExpand', (id) => this.logEvent(id, 'beforeExpand'));
        this.ribbon.events.on('beforeCollapse', (id) => this.logEvent(id, 'beforeCollapse'));
        this.ribbon.events.on('afterCollapse', (id) => this.logEvent(id, 'afterCollapse'));
        this.ribbon.events.on('afterExpand', (id) => this.logEvent(id, 'afterExpand'));
        this.ribbon.events.on('afterHide', (id) => this.logEvent(id, 'afterHide'));
    }

    ngOnDestroy() {
        if (this.ribbon) {
            this.ribbon.destructor();
        }
    }
}
