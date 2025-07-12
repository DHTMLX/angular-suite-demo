import { DataView } from "@dhx/trial-suite";
import { getData } from "../../../app.data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-tickets-dataview",
  template: `<div #dataview_container></div>`
})
export class TicketsDataviewComponent implements OnInit, OnDestroy {
  @ViewChild("dataview_container", { static: true }) dataview_container!: ElementRef;
  
  private _dataview!: DataView;

  ngOnInit() {
    const { ticketsDataviewData } = getData();
    this._dataview = new DataView(this.dataview_container.nativeElement, {
      data: ticketsDataviewData,
      template: this.template,
      itemsInRow: 2,
      css: "dhx_dataview_template_a_box"
    });
  }

  ngOnDestroy() {
    this._dataview?.destructor();
  }

  template(item: any) {
    return `
      <div class="dhx_dataview_template_a">
          <div class="dhx_dataview_template_a__head">
              <div class="dhx_dataview_template_a__type dhx_dataview_template_a__type--${item.type}">${item.type}</div>
              <div class="dhx_dataview_template_a__content">
                  <div class="dhx_dataview_template_a__title">${item.title}</div>
                  <div class="dhx_dataview_template_a__comment">${item.text}</div>
              </div>
          </div>
          <div class="dhx_dataview_template_a__body">
              <div class="dhx_dataview_template_a__person">
                  <div class="dhx_dataview_template_a__avatar" style="background-image: url(${item.avatar})"></div>
                  <div class="dhx_dataview_template_a__info">
                      <div class="dhx_dataview_template_a__time">${item.time}</div>
                      <div class="dhx_dataview_template_a__name">${item.name}</div>
                  </div>
              </div>
              <div class="dhx_dataview_template_a__comments">${item.comments}
              <span class="mdi mdi-comment-outline"></span></div>
          </div>
      </div>
    `;
  }
}
