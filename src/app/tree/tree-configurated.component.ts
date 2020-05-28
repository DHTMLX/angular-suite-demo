import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { Tree as TreeDHX } from 'dhx-suite';

@Component({
  selector: 'app-tree-configurated',
  template: `<div #widget class="dhx-container--tree"></div>`,
  styleUrls: ['../app.component.scss'],
})
export class TreeConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
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
