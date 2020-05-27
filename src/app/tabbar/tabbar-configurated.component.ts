import { Component, ViewChild, OnDestroy, ElementRef, Input } from '@angular/core';
import { Tabbar as TabbarDHX } from 'dhx-suite';

@Component({
  selector: 'app-tabbar-configurated',
  template: `<div #widget class="dhx-container--tabbar"></div>`,
  styleUrls: ['../app.component.scss'],
})
export class TabbarConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  tabbar: TabbarDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.tabbar = new TabbarDHX(this.container.nativeElement, {
      ...this.options
    });
  }

  ngOnDestroy() {
    if (this.tabbar) {
      this.tabbar.destructor();
    }
  }
}
