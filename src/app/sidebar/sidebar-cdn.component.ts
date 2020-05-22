import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Sidebar as SidebarDHX } from 'dhx-suite';
import fromCDN from 'from-cdn';

@Component({
    selector: 'app-sidebar-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: ['../app.component.scss'],
})
export class SidebarCDNComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    sidebar: SidebarDHX;
    wait: Promise<void>;

    @Output() ready: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.wait = fromCDN([
          'https://cdn.dhtmlx.com/suite/edge/suite.js',
          'https://cdn.dhtmlx.com/suite/edge/suite.css',
        ]).then(() => {
          this.sidebar = new dhx.Sidebar(this.container.nativeElement, {
            css: 'dhx_widget--bordered dhx_widget--bg_white',
          });
          this.ready.emit({ sidebar: this.sidebar });
          this.sidebar.data.load('https://dhtmlx.github.io/react-widgets/static/sidebar.json');
        });
    }

    ngOnDestroy() {
      if (this.sidebar) {
          this.sidebar.destructor();
      }
    }
}
