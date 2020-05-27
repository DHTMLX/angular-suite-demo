import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Popup as PopupDHX } from 'dhx-suite';

@Component({
  selector: 'app-popup-event',
  template: `
    <section class="component-wrapper">
      <div>
        <div #widget></div>
        <button (click)="popupShow()" class="custom-button">Show Popup</button>
      </div>
      <div class="events-list events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </section>`,
  styleUrls: ['../app.component.scss'],
})
export class PopupEventComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  popup: PopupDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  popupShow(): void {
    this.popup.show(this.container.nativeElement, {
      mode: "left",
      indent: 20
    });
  }

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
