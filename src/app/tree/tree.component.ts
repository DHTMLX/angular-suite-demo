import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Tree as TreeDHX } from 'dhx-suite';

@Component({
  selector: 'app-tree',
  template: `<div #widget class="dhx-container--tree"></div>`,
  styleUrls: ['../app.component.scss'],
})
export class TreeComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  tree: TreeDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.tree = new TreeDHX(this.container.nativeElement);

    this.tree.data.load('https://dhtmlx.github.io/react-widgets/static/tree.json');
  }

  ngOnDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  }
}
