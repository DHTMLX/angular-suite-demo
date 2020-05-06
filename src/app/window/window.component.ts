import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Window } from 'dhx-suite';

@Component({
    selector: 'app-window-cdn',
    template: `<div class="container">
        <div #widget class='widget-box-wide'></div>
        <button className="button" (click)="this.window.show()">
        Show Window
        </button>
    </div>`,
    styleUrls: [ './window.scss' ],
})
export class WindowComponent implements OnDestroy {
    window: Window;
    wait: Promise<void>;

    ngOnInit() {
        const windowHtml = `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`;
        this.window = new Window({
            width: 440,
            height: 520,
            title: 'Window',
            html: windowHtml,
            closable: true,
        });

    }

    ngOnDestroy() {
        if (this.window) {
            this.window.destructor();
        }
    }
}
