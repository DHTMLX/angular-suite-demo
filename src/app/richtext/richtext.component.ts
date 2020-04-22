import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
  selector: 'app-richtext-cdn',
  template: `<div #widget class='widget-box-wide'></div>`,
  styleUrls: ['./richtext.component.scss']
})
export class RichtextCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true}) container: ElementRef;
  richtext: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/richtext/edge/richtext.js',
      'https://cdn.dhtmlx.com/richtext/edge/richtext.css'
    ]).then(() => {
      this.richtext = new dhx.Richtext(this.container.nativeElement);

      this.ready.emit({ richtext: this.richtext });
    });
  }

  ngOnDestroy() {
    if (this.richtext) {
      this.richtext.destructor();
    }
  }
}