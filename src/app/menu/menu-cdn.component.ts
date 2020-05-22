import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-menu-cdn',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class MenuCDNComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  menu: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.menu = new dhx.Menu(this.container.nativeElement, {
        css: 'dhx_widget--bordered',
      });
      this.menu.data.load(`https://dhtmlx.github.io/react-widgets/static/menu.json`);
      this.ready.emit({menu: this.menu});
    });
  }

  ngOnDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  }
}
