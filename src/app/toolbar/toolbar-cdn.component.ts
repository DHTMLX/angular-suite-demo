import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import { Toolbar as ToolbarDHX } from "dhx-suite";
import fromCDN from "from-cdn";
@Component({
  selector: "app-toolbar-cdn",
  template: `<div #widget class="dhx-container--menu"></div>`,
  styleUrls: ["../app.component.scss"],
})
export class ToolbarCDNComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  toolbar: ToolbarDHX;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.toolbar = new dhx.Toolbar(this.container.nativeElement, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
        navigationType: "pointer",
      });
      this.ready.emit({ toolbar: this.toolbar });
      this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json");
    });
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
