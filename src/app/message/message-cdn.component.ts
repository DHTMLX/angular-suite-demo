import { Output, Component, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-message-cdn',
  template: `
    <div class="dhx-container--button">
      <button className="button" (click)="this.showAlert()" class="custom-button">Show Alert</button>
      <button className="button" (click)="this.showConfirm()" class="custom-button">Show Confirm</button>
      <button className="button" (click)="this.showMessage()" class="custom-button">Show Message</button>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class MessageCDNComponent {
  wait: Promise<void>;
  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]);
  }

  showAlert = () => {
    this.wait.then(() => {
      dhx.alert({
        header: 'DHTMLX Alert Box',
        text:
          'With the help of DHTMLX components you are able to create versatile user interfaces for web apps of any kind. Modern technologies and design make our library a great tool for developers working on the most complex projects. And here dhtmlxMessage represents a small but indispensable toolkit of helpers for initializing all types of messages: notifications, alert and confirmation boxes, and tooltips. Try out the abilities of dhtmlxMessage in our interactive demos and samples.',
        buttonsAlignment: 'center',
        buttons: ['ok'],
      });
    });
  };

  showConfirm = () => {
    this.wait.then(() => {
      dhx.confirm({
        header: 'DHTMLX Confirm Box',
        text:
            'With the help of DHTMLX components you are able to create versatile user interfaces for web apps of any kind. Modern technologies and design make our library a great tool for developers working on the most complex projects. And here dhtmlxMessage represents a small but indispensable toolkit of helpers for initializing all types of messages: notifications, alert and confirmation boxes, and tooltips. Try out the abilities of dhtmlxMessage in our interactive demos and samples.',
        buttonsAlignment: 'center',
      });
    });
  };

  showMessage = () => {
    this.wait.then(() => {
      dhx.message({
        text: 'Here is dhtmlxMessage',
        icon: 'dxi-close',
        expire: 1000,
      });
    });
  };
}
