import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {Ribbon as RibbonDHX, TreeCollection} from 'dhx-suite';

@Component({
  selector: 'app-ribbon-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './ribbon.scss'],
})
export class RibbonConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: RibbonDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.toolbar = new RibbonDHX(this.container.nativeElement, {
      ...this.options
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/ribbon.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
