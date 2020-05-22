import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Popup as PopupDHX } from 'dhx-suite';

@Component({
  selector: 'app-popup-event',
  template: `
    <div class="component-wrapper">
      <div>
        <div #widget class='widget-box-wide'>
        </div>
        <button (click)="this.popup.show(this.container.nativeElement)" class="custom-button">Show Popup</button>
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
      '<div style=\'padding: 16px; text-align: center\'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>',
    );

    this.popup.events.on('beforeHide', (fromOuterClick) => this.logEvent(fromOuterClick, 'beforeHide'));
    this.popup.events.on('beforeShow', (element) => {
      this.logEvent(element.outerHTML, 'beforeShow');
    });
    this.popup.events.on('afterHide', () => this.logEvent(null, 'afterHide'));
    this.popup.events.on('afterShow', () => this.logEvent(null, 'afterShow'));
    this.popup.events.on('click', (e) => this.logEvent(JSON.stringify(e), 'click'));
  }

  ngOnDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  }
}
