import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { DataView as DataviewDHX } from "dhx-suite";

@Component({
  selector: "app-dataview-event",
  template: ` <div class="component-wrapper">
    <div #widget style="height: 450px; width: 650px; padding: 0 24px"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
      <div class="events-list--element" *ngFor="let event of eventsList">
        <p>{{ event.name }}</p>
        <p>{{ event.payload }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class DataviewEventsComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  dataview: DataviewDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  renderTemplate = item => `
    <div class="template template__container">
      <img
        class="template__image"
        src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
      />
      <h2 class="template__title">${item.title}</h2>
      <p class="template__description">${item.short}</з>
    </div>
  `;

  ngOnInit() {
    this.dataview = new DataviewDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: this.renderTemplate,
      itemsInRow: 2,
      gap: 10,
    });

    this.dataview.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");

    this.dataview.events.on("click", id => this.logEvent(id, "click"));
    this.dataview.events.on("doubleclick", id => this.logEvent(id, "doubleclick"));
  }

  ngOnDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  }
}
