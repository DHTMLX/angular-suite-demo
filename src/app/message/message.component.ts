import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {alert as dhxAlert, confirm as dhxConfirm, message as dhxMessage} from 'dhx-suite';

@Component({
  selector: 'app-message-commmon-cdn',
  template: `
      <div class="container">
          <button className="button" (click)="this.showAlert()">Show Alert</button>
          <button className="button" (click)="this.showConfirm()">Show Confirm</button>
          <button className="button" (click)="this.showMessage()">Show Message</button>
      </div>`,
  styleUrls: ['./message.scss'],
})
export class MessageComponent implements OnDestroy {
  showAlert = () => {
    dhxAlert({
      header: 'DHTMLX Alert Box',
      text:
          'With the help of DHTMLX components you are able to create versatile user interfaces for web apps of any kind. Modern technologies and design make our library a great tool for developers working on the most complex projects. And here dhtmlxMessage represents a small but indispensable toolkit of helpers for initializing all types of messages: notifications, alert and confirmation boxes, and tooltips. Try out the abilities of dhtmlxMessage in our interactive demos and samples.',
      buttonsAlignment: 'center',
      buttons: ['ok'],
    });
  };

  showConfirm = () => {
    dhxConfirm({
      header: 'DHTMLX Confirm Box',
      text:
          'With the help of DHTMLX components you are able to create versatile user interfaces for web apps of any kind. Modern technologies and design make our library a great tool for developers working on the most complex projects. And here dhtmlxMessage represents a small but indispensable toolkit of helpers for initializing all types of messages: notifications, alert and confirmation boxes, and tooltips. Try out the abilities of dhtmlxMessage in our interactive demos and samples.',
      buttonsAlignment: 'center',
    });
  };

  showMessage = () => {
    dhxMessage({
      text: 'Here is dhtmlxMessage',
      icon: 'dxi-close',
      expire: 1000,
    });
  };

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
