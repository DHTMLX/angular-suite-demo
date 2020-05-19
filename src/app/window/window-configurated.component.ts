import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter, Input} from '@angular/core';
import {Window} from 'dhx-suite';

@Component({
  selector: 'app-window-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
          <button className="button" (click)="this.window.show()">
              Show Window
          </button>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class WindowConfiguratedComponent implements OnDestroy {
  window: Window;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.window = new Window({
      ...this.options
    });

  }

  ngOnDestroy() {
    if (this.window) {
      this.window.destructor();
    }
  }
}
