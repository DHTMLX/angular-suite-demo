import { Tabbar } from "@dhx/trial-suite";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-tabbar",
  template: `<div #tabbar_container class="tabbar_widget"></div>`
})

export class TabbarComponent implements OnInit, OnDestroy {
  @ViewChild("tabbar_container", { static: true }) tabbar_container!: ElementRef;
  
  private _tabbar!: Tabbar;

  ngOnInit() {
    this._tabbar = new Tabbar(this.tabbar_container.nativeElement, {
      tabAlign: "center",
      disabled: ["reports", "tickets", "users", "applications"],
      views: [
        { id: "dashboard", tab: "Dashboard" },
        { id: "reports", tab: "Reports" },
        { id: "tickets", tab: "Tickets" },
        { id: "users", tab: "Users" },
        { id: "applications", tab: "Applications" }
      ]
    });
  }

  ngOnDestroy() {
    this._tabbar?.destructor();
  }
}
