import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Popup as PopupDHX } from 'dhx-suite';

@Component({
  selector: 'app-popup',
  template: `
    <div>
      <div #widget></div>
      <button (click)="popupShow()" class="custom-button">
        Show Popup
      </button>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class PopupComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  popup: PopupDHX;
  wait: Promise<void>;

  popupShow(): void {
    this.popup.show(this.container.nativeElement, {
      mode: "bottom",
      indent: 50
    });
  }

  ngOnInit() {
    this.popup = new PopupDHX({
      css: 'dhx_widget--bordered',
    });
    this.popup.attachHTML(
      '<div style=\'padding: 16px; text-align: center\'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>',
    );
  }

  ngOnDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  }
}
