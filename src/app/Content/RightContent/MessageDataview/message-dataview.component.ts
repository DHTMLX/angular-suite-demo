import { DataView } from '@dhx/trial-suite';
import { getData } from "../../../app.data";

import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-message-dataview',
  template: `<div #dataview_container></div>`
})

export class MessageDataviewComponent implements OnInit, OnDestroy {
  @ViewChild('dataview_container', { static: true }) dataview_container!: ElementRef;
  
  private _dataview!: DataView;

  ngOnInit() {
    const { messageDataviewData } = getData();
    this._dataview = new DataView(this.dataview_container.nativeElement, {
      data: messageDataviewData,
      template: this.template,
      itemsInRow: 2,
      css: 'dhx_dataview_template_b_box',
      // other configuration goes here
    });
  }
  ngOnDestroy() {
    this._dataview?.destructor();
  }

  template({ mail, name, avatar, status, delivered }: any) {
    return `
        <div class="dhx_dataview_template_b">
            <div class="dhx_dataview_template_b__avatar" style="background-image: url(${avatar});">
                <div class="dhx_dataview_template_b__status dhx_dataview_template_b__status--${status}"></div>
            </div>
            <div class="dhx_dataview_template_b__title">Delivered ${delivered}</div>
            <div class="dhx_dataview_template_b__name">${name}</div>
            <a class="dhx_dataview_template_b__message" target="_blank" href="mailto:${mail}">
                <span class="dhx_dataview_template_b__message-icon mdi mdi-message-reply-text"></span>
                <span class="dhx_dataview_template_b__message-label">Message</span>
            </a>
        </div>
    `;
  }
}
