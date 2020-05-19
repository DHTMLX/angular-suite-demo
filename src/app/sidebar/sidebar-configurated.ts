import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Sidebar as SidebarDHX, TreeCollection } from 'dhx-suite';
@Component({
    selector: 'app-sidebar-configurated',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: ['../app.component.scss'],
})
export class SidebarConfiguratedComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    toolbar: SidebarDHX;
    wait: Promise<void>;

    ngOnInit() {
        this.toolbar = new SidebarDHX(this.container.nativeElement, {
            css: 'dhx_widget--bordered dhx_widget--bg_white',
            minWidth: 120,
            collapsed: false,
        });

        this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/sidebar.json');
    }

    ngOnDestroy() {
        if (this.toolbar) {
            this.toolbar.destructor();
        }
    }
}
