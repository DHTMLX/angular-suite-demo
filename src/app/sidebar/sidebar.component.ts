import { Sidebar } from '@dhx/trial-suite';
import { getData } from "../app.data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<div #node class="dhx_widget--border_right sidebar_container"></div>`,
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar_container', { static: true }) sidebar_container!: ElementRef;

  private _sidebar!: Sidebar;

  ngOnInit() {
    const { sidebarData } = getData();

    this._sidebar = new Sidebar(this.sidebar_container.nativeElement, {
      data: sidebarData
    });

    this._sidebar.events.on('click', (id: string) => {
      if (id === 'toggle') {
        const toggleItem = this._sidebar.data.getItem('toggle');
        this._sidebar.toggle();
        toggleItem.icon = this._sidebar.config.collapsed
          ? 'mdi mdi-menu'
          : 'mdi mdi-backburger';
      }
    });
  }

  ngOnDestroy() {
    this._sidebar?.destructor();
  }
}
