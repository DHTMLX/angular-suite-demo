import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Tree as TreeDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-tree-data',
  template: `
      <div>
          <div class="btn-container">
              <button (click)="handleClick(false)" class="custom-button">Collapse All</button>
              <button (click)="handleClick(true)" class="custom-button">Expand All</button>
          </div>
          <div #widget class='container widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './tree.scss'],
})
export class TreeDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  tree: TreeDHX;
  wait: Promise<void>;

  data = new TreeCollection();

  handleClick = (value) => {
    this.data.map(item => {
      this.data.update(item.id, {opened: value});
    });
  };

  ngOnInit() {
    this.tree = new TreeDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      data: this.data
    });

    this.data.load('https://dhtmlx.github.io/react-widgets/static/tree.json');
  }

  ngOnDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  }
}
