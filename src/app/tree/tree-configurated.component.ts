import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {Tree as TreeDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-tree-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './tree.scss'],
})
export class TreeConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  tree: TreeDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.tree = new TreeDHX(this.container.nativeElement, {
      ...this.options
    });

    this.tree.data.load('https://dhtmlx.github.io/react-widgets/static/tree.json');
  }

  ngOnDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  }
}
