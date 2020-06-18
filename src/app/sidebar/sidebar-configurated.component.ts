import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Sidebar as SidebarDHX } from "dhx-suite";

@Component({
  selector: "app-sidebar-configurated",
  template: `<div #widget class="widget-box-wide"></div>`,
})
export class SidebarConfiguratedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  toolbar: SidebarDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.toolbar = new SidebarDHX(this.container.nativeElement, {
      ...this.options,
    });

    this.toolbar.data.load("https://dhtmlx.github.io/react-widgets/static/sidebar.json");
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
