// message-dataview.component.ts
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DataView } from '@dhx/trial-suite';
import { MessagesDataService } from './messages.service';

@Component({
  selector: 'app-message-dataview',
  templateUrl: './messages.component.html',
  styleUrls: [],
})
export class MessageDataviewComponent implements OnInit, OnDestroy {
  @ViewChild('dataviewContainer', { static: true })
  dataviewContainer!: ElementRef;
  dataview: any;

  constructor(private store: MessagesDataService) {}

  ngOnInit() {
    this.dataview = new DataView(this.dataviewContainer.nativeElement, {
      template: this.template,
      itemsInRow: 2,
      css: 'dhx_dataview_template_b_box',
      // other configuration goes here
    });
    this.store.getMessages().subscribe((data: any) => {
      // <1>
      this.dataview.data.parse(data);
    });
  }
  ngOnDestroy() {
    this.dataview?.destructor();
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
