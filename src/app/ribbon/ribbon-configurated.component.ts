import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { Ribbon as RibbonDHX } from 'dhx-suite';

@Component({
  selector: 'app-ribbon-configurated',
  template: `<div #widget></div>`,
  styleUrls: ['../app.component.scss'],
})
export class RibbonConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
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
