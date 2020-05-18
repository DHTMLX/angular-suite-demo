import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Menu as MenuDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-menu-data',
  template: `
      <div>
          <div class="btn-container">
              <button (click)="handleClick()">disable/enable edit button</button>
          </div>
          <div #widget class='container widget-box-wide'></div>

      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class MenuDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  menu: MenuDHX;
  wait: Promise<void>;

  data = new TreeCollection();
  disabled = false;

  handleClick = () => {
    this.data.update('edit', {disabled: !this.data.getItem('edit').disabled});
  };

  ngOnInit() {
    this.menu = new MenuDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered',
      data: this.data
    });
    this.data.load(`https://dhtmlx.github.io/react-widgets/static/menu.json`);
  }

  ngOnDestroy() {
    if (this.menu) {
      this.menu.destructor();
    }
  }
}
