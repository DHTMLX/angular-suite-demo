import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {Sidebar as SidebarDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-sidebar-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class SidebarConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: SidebarDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.toolbar = new SidebarDHX(this.container.nativeElement, {
      ...this.options
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/sidebar.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
