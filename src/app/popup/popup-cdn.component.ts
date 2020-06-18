import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import fromCDN from "from-cdn";

@Component({
  selector: "app-popup-cdn",
  template: ` <div>
    <div #widget></div>
    <button (click)="popupShow()" class="custom-button">Show Popup</button>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class PopupCDNComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  popup: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.popup = new dhx.Popup({
        css: "dhx_widget--bordered",
      });
      this.popup.attachHTML("<div style='padding: 16px; text-align: center'>Hi there, <br/> welcome to DHTMLX-react popup sample</div>");
      this.ready.emit({ popup: this.popup });
    });
  }

  popupShow(): void {
    this.popup.show(this.container.nativeElement, {
      mode: "bottom",
      indent: 50,
    });
  }

  ngOnDestroy() {
    if (this.popup) {
      this.popup.destructor();
    }
  }
}
