import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { Menu as MenuDHX } from 'dhx-suite';

@Component({
  selector: 'app-menu-configurated',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class MenuConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  menu: MenuDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.menu = new MenuDHX(this.container.nativeElement, {
      ...this.options
    });
    this.menu.data.load(`https://dhtmlx.github.io/react-widgets/static/menu.json`);
  }

  ngOnDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  }
}
