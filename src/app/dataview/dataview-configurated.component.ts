import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {DataView as DataviewDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-dataview-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss'],
})
export class DataviewConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  dataview: DataviewDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.dataview = new DataviewDHX(this.container.nativeElement, {
      ...this.options
    });

    this.dataview.data.load('https://dhtmlx.github.io/react-widgets/static/dataview.json');
  }

  ngOnDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  }
}
