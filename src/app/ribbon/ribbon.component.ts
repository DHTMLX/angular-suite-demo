import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Ribbon as RibbonDHX } from 'dhx-suite';

@Component({
  selector: 'app-ribbon',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss', './ribbon.scss'],
})
export class RibbonComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  toolbar: RibbonDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.toolbar = new RibbonDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/ribbon.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
