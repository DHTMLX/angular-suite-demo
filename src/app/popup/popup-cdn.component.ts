import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
  selector: 'app-window-cdn',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'>
          </div>
          <button (click)="this.popup.show(this.container.nativeElement)">
              Show Popup
          </button>
      </div>`,
  styleUrls: ['./popup.scss'],
})
export class PopupCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  popup: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.popup = new dhx.Popup({
        css: 'dhx_widget--bordered',
      });
      this.popup.attachHTML(
          '<div style=\'padding: 16px; text-align: center\'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>',
      );
      this.ready.emit({popup: this.popup});
    });
  }

  ngOnDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  }
}
