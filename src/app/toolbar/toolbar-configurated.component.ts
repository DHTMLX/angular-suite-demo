import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Toolbar as ToolbarDHX } from "dhx-suite";

@Component({
  selector: "app-toolbar-configurated",
  template: `<div #widget class="dhx-container--menu"></div>`,
  styleUrls: ["../app.component.scss"],
})
export class ToolbarConfiguratedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  toolbar: ToolbarDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.toolbar = new ToolbarDHX(this.container.nativeElement, {
      ...this.options,
    });

    this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json");
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
