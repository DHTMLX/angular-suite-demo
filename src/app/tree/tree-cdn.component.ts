import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-tree-cdn',
  template: `<div #widget class="dhx-container--tree"></div>`,
  styleUrls: ['../app.component.scss'],
})
export class TreeCDNComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  tree: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.tree = new dhx.Tree(this.container.nativeElement);
      this.tree.data.load('https://dhtmlx.github.io/react-widgets/static/tree.json');
      this.ready.emit({tree: this.tree});
    });
  }

  ngOnDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  }
}
