import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { List as ListDHX } from 'dhx-suite';

@Component({
  selector: 'app-list-configurated',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss', './list.scss'],
})
export class ListConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  list: ListDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.list = new ListDHX(this.container.nativeElement, {
      ...this.options,
    });
    this.list.data.load(`https://dhtmlx.github.io/react-widgets/static/dataview.json`);
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
