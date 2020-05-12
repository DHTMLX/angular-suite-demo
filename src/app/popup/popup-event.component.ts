import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Popup as PopupDHX} from 'dhx-suite';

@Component({
  selector: 'app-window-cdn',
  template: `
    <div class="component-wrapper">
      <div class="container">
        <div #widget class='widget-box-wide'>
        </div>
        <button (click)="this.popup.show(this.container.nativeElement)">Show Popup</button>
        <button (click)="this.popup.hide(this.container.nativeElement)">Hide Popup</button>
      </div>
      <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss', './popup.scss'],
})
export class PopupEventComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  popup: PopupDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.popup = new PopupDHX({
      css: 'dhx_widget--bordered',
    });
    this.popup.attachHTML(
      "<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>",
    );

    this.popup.events.on('beforeHide', (value) => this.logEvent(value, 'beforeHide'));
    this.popup.events.on('beforeShow', (element) => {
      this.logEvent(element.outerHTML, 'beforeShow')
    });
    this.popup.events.on('afterHide', () => this.logEvent(null, 'afterHide'));
    this.popup.events.on('afterShow', () => this.logEvent(null, 'afterShow'));
    this.popup.events.on('click', (id) => this.logEvent(id, 'click'));
  }

  ngOnDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  }
}
