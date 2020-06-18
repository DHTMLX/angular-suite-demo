import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Sidebar as SidebarDHX } from "dhx-suite";
@Component({
  selector: "app-sidebar",
  template: `<div #widget class="widget-box-wide"></div>`,
})
export class SidebarComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  toolbar: SidebarDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.toolbar = new SidebarDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });

    this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json");
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
