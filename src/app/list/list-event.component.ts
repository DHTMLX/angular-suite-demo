import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { List as ListDHX } from "dhx-suite";

@Component({
  selector: "app-list-event",
  template: ` <div class="component-wrapper">
    <div #widget></div>
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
export class ListEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  list: ListDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (name: string, payload?: any) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.list = new ListDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      dragMode: "both",
      editable: true,
    });

    this.list.data.load(`https://dhtmlx.github.io/react-widgets/static/list.json`);

    this.list.events.on("click", id => this.logEvent("click", id));
    this.list.events.on("doubleclick", id => this.logEvent("doubleclick", id));
		this.list.events.on("focuschange", () => this.logEvent("focuschange"));
		this.list.events.on("beforeDrag", () => this.logEvent("beforeDrag"));
		this.list.events.on("beforeDrop", () => this.logEvent("beforeDrop"));
		this.list.events.on("dragStart", () => this.logEvent("dragStart"));
		this.list.events.on("afterDrag", () => this.logEvent("afterDrag"));
		this.list.events.on("canDrop", () => this.logEvent("canDrop"));
		this.list.events.on("cancelDrop", () => this.logEvent("cancelDrop"));
		this.list.events.on("afterDrop", () => this.logEvent("afterDrop"));
		this.list.events.on("dragOut", () => this.logEvent("dragOut"));
		this.list.events.on("dragIn", () => this.logEvent("dragIn"));
		this.list.events.on("beforeSelect", () => this.logEvent("beforeSelect"));
		this.list.events.on("afterSelect", () => this.logEvent("afterSelect"));
		this.list.events.on("beforeUnSelect", () => this.logEvent("beforeUnSelect"));
		this.list.events.on("afterUnSelect", () => this.logEvent("afterUnSelect"));
		this.list.events.on("beforeEditStart", () => this.logEvent("beforeEditStart"));
		this.list.events.on("afterEditStart", () => this.logEvent("afterEditStart"));
		this.list.events.on("beforeEditEnd", () => this.logEvent("beforeEditEnd"));
		this.list.events.on("afterEditEnd", () => this.logEvent("afterEditEnd"));
		this.list.events.on("itemRightClick", () => this.logEvent("itemRightClick"));
		this.list.events.on("itemMouseOver", () => this.logEvent("itemMouseOver"));
  }

  ngOnDestroy() {
    if (this.list) {
      this.list.destructor();
    }
  }
}
