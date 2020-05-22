import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Sidebar as SidebarDHX, TreeCollection } from 'dhx-suite';

@Component({
  selector: 'app-sidebar-data',
  template: `
    <div>
      <div class="btn-container">
        <button (click)="handleAddClick(click)" class="custom-button">Add notification</button>
        <button (click)="handleResetClick(click)" class="custom-button">Reset {{count}} notifications</button>
      </div>
      <div #widget class='container widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class SidebarDataComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  toolbar: SidebarDHX;
  wait: Promise<void>;

  data = new TreeCollection();
  count = 0;

  handleAddClick = () => {
    this.data.update('media', {count: this.data.getItem('media').count + 1});
  };

  handleResetClick = () => {
    this.data.update('media', {count: 0});
  };

  ngOnInit() {
    this.toolbar = new SidebarDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      data: this.data,
    });

    this.data.load('https://dhtmlx.github.io/react-widgets/static/sidebar.json').then(() => {
      this.data.events.on('change', () => {
        this.count = this.data.getItem('media').count;
      });
    });
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
