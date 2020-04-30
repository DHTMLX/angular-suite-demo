import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Ribbon as RibbonDHX, TreeCollection } from 'dhx-suite';
@Component({
    selector: 'app-ribbon-common-cdn',
    template: `<div class="container"><div #widget class='widget-box-wide'></div></div>`,
    styleUrls: [ './ribbon.scss' ],
})
export class RibbonConfiguratedComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    toolbar: RibbonDHX;
    wait: Promise<void>;

    ngOnInit() {
        this.toolbar = new RibbonDHX(this.container.nativeElement, {
            css: 'dhx_widget--bordered dhx_widget--bg_white',
        });

        this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/ribbon.json');
    }

    ngOnDestroy() {
        if (this.toolbar) {
            this.toolbar.destructor();
        }
    }
}
