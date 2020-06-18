import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Menu as MenuDHX } from "dhx-suite";

@Component({
  selector: "app-menu",
  template: `<div #widget class="dhx-container--menu"></div>`,
  styleUrls: ["../app.component.scss"],
})
export class MenuComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  menu: MenuDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.menu = new MenuDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    });
    this.menu.data.load(`https://dhtmlx.github.io/react-widgets/static/menu.json`);
  }

  ngOnDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  }
}
