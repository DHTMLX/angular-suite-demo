// tickets-dataview.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataView } from '@dhx/trial-suite';
import { DataviewDataService } from './datview-data.service';

@Component({
  selector: 'app-tickets-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: [],
})
export class TicketsDataviewComponent implements OnInit {
  @ViewChild('dataviewNode', { static: true }) dataviewNode!: ElementRef;
  dataview: any;

  constructor(private store: DataviewDataService) {}

  ngOnInit() {
    this.dataview = new DataView(this.dataviewNode.nativeElement, {
      template: this.template,
      itemsInRow: 2,
      css: 'dhx_dataview_template_a_box',
    });

    this.store.getDataviewData().subscribe((data: any) => {
      this.dataview.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.dataview && this.dataview.destructor();
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
