import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Menu as MenuDHX, TreeCollection } from 'dhx-suite';

@Component({
    selector: 'app-timepicker-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: [ './menu.scss' ],
})
export class MenuComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    menu: MenuDHX;
    wait: Promise<void>;

    ngOnInit() {
        this.menu = new MenuDHX(this.container.nativeElement, {
            css: 'dhx_widget--bordered',
        });
        this.menu.data.load(`https://dhtmlx.github.io/react-widgets/static/menu.json`);
    }

    ngOnDestroy() {
        if (this.menu) {
            this.menu.destructor();
        }
    }
}
