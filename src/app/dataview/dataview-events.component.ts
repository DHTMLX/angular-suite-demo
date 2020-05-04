import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { DataView as DataviewDHX, DataCollection } from 'dhx-suite';

@Component({
    selector: 'app-ribbon-cdn',
    template: `<div class="">
    <div #widget class='widget-box-wide'></div>
    <div class="events-list-wrapper">
        <div *ngFor='let event of eventsList'>
            <p>{{event.name}}</p>
            <p>{{event.payload}}</p>
        </div>
    </div>
</div>`,
    styleUrls: [ '../app.component.scss' ],
})
export class DataviewEventsComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    dataview: DataviewDHX;
    wait: Promise<void>;

    eventsList = [];

    logEvent = (payload, name: string) => {
        this.eventsList = [ { name, payload } ].concat(this.eventsList);
    };

    renderTemplate = (item) => `<div class='item_wrap item-wrap--grid'>
    <img
        class='image'
        style="max-width: 150px"
        src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
    />
    <h2 class='title'>${item.title}</h2>
    <div>${item.short}</div>
  </div>`;

    ngOnInit() {
        this.dataview = new DataviewDHX(this.container.nativeElement, {
            css: 'dhx_widget--bordered dhx_widget--bg_white',
            template: this.renderTemplate,
            itemsInRow: 6,
        });

        this.dataview.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');

        this.dataview.events.on('click', (id) => this.logEvent(id, 'click'));
        this.dataview.events.on('focuschange', (id) => this.logEvent(id, 'focuschange'));
        this.dataview.events.on('doubleclick', (id) => this.logEvent(id, 'doubleclick'));
    }

    ngOnDestroy() {
        if (this.dataview) {
            this.dataview.destructor();
        }
    }
}
