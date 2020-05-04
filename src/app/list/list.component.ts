import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { List as ListDHX, DataCollection } from 'dhx-suite';
@Component({
    selector: 'app-ribbon-common-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: [ './list.scss' ],
})
export class ListComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    list: ListDHX;
    wait: Promise<void>;

    ngOnInit() {
        this.list = new ListDHX(this.container.nativeElement, {
            css: 'dhx_widget--bordered dhx_widget--bg_white',
            template: (item) => `<span><strong>${item.title}</strong> ${item.short}</span>`,
            height: 400,
        });
        this.list.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
    }

    ngOnDestroy() {
        if (this.list) {
            this.list.destructor();
        }
    }
}
