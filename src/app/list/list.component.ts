import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { List as ListDHX } from "dhx-suite";

@Component({
  selector: "app-list",
  template: `<div #widget></div>`,
})
export class ListComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  list: ListDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.list = new ListDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
    });
    this.list.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
