import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Toolbar as ToolbarDHX } from 'dhx-suite';

@Component({
  selector: 'app-toolbar',
  template: `<div #widget class="dhx-container--menu"></div>`,
  styleUrls: ['../app.component.scss'],
})
export class ToolbarComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  toolbar: ToolbarDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.toolbar = new ToolbarDHX(this.container.nativeElement, {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      navigationType: 'pointer',
    });

    this.toolbar.data.load('https://dhtmlx.github.io/react-widgets/static/toolbar.json');
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
