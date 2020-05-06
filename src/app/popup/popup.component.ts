import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import { Popup as PopupDHX } from 'dhx-suite';

@Component({
    selector: 'app-window-cdn',
    template: `<div class="container">
        <div #widget class='widget-box-wide'>
            
        </div>
        <button  (click)="this.popup.show(this.container.nativeElement)">
            Show Popup
            </button>
    </div>`,
    styleUrls: [ './popup.scss' ],
})
export class PopupComponent implements OnDestroy {
    @ViewChild('widget', { static: true })
    container: ElementRef;
    popup: PopupDHX;
    wait: Promise<void>;

    ngOnInit() {
        this.popup = new PopupDHX({
            css: 'dhx_widget--bordered',
        });
        this.popup.attachHTML(
            "<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>",
        );
    }

    ngOnDestroy() {
        if (this.popup) {
            this.popup.destructor();
        }
    }
}
