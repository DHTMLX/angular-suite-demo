import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Toolbar as ToolbarDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-timepicker-cdn',
  template: `
      <div>
          <div class="btn-container">
              <button (click)="handleAddClick(click)">Add notification</button>
              <button (click)="handleResetClick(click)">Reset {{count}} notifications</button>
          </div>
          <div #widget class='container widget-box-wide'></div>
      </div>`,
  styleUrls: ['./toolbar.scss'],
})
export class ToolbarDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: ToolbarDHX;
  wait: Promise<void>;

  data = new TreeCollection();
  count = 0;

  handleAddClick = () => {
    this.data.update('add', {count: this.data.getItem('add').count + 1});
  };

  handleResetClick = () => {
    this.data.update('add', {count: 0});
  };

  ngOnInit() {
    this.toolbar = new ToolbarDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      navigationType: 'pointer',
      data: this.data,
    });

    this.data.load('https://dhtmlx.github.io/react-widgets/static/toolbar.json').then(() => {
      this.data.events.on('change', () => {
        this.count = this.data.getItem('add').count;
      });
    });
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
