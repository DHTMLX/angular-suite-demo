// sidebar.component.ts
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Sidebar } from "@dhx/trial-suite";
import { SidebarDataService } from './sidebar-data.service'; // Assuming you have a service to handle the store

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('node', { static: true }) node!: ElementRef;
  sidebar!: Sidebar;

  constructor(private sidebarDataService: SidebarDataService) { }

  ngOnInit() {
    this.sidebar = new Sidebar(this.node.nativeElement, {});
    this.sidebar.events.on("click", (id: string) => {
      if (id === "toggle") {
        const toggleItem = this.sidebar.data.getItem("toggle");
        this.sidebar.toggle();
        toggleItem.icon = this.sidebar.config.collapsed
          ? "mdi mdi-menu"
          : "mdi mdi-backburger";
      }
    });

    this.sidebarDataService.getSidebarData().subscribe((data: any) => {
      this.sidebar?.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.sidebar.destructor();
  }
}