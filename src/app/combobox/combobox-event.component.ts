import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Combobox as ComboboxDHX } from "dhx-suite";

@Component({
  selector: "app-combobox-event",
  template: ` <section class="component-wrapper">
    <div #widget style="width:400px"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
      <div class="events-list--element" *ngFor="let event of eventsList">
        <p>{{ event.name }}</p>
        <p>{{ event.payload }}</p>
      </div>
    </div>
  </section>`,
  styleUrls: ["../app.component.scss"],
})
export class ComboboxEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      placeholder: "Click to choose",
    });

    this.combobox.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");

    this.combobox.events.on("change", id => this.logEvent(id, "change"));
    this.combobox.events.on("beforeClose", () => this.logEvent(null, "beforeClose"));
    this.combobox.events.on("afterClose", () => this.logEvent(null, "afterClose"));
    this.combobox.events.on("input", value => this.logEvent(value, "input"));
    this.combobox.events.on("blur", () => this.logEvent(null, "blur"));
    this.combobox.events.on("focus", () => this.logEvent(null, "focus"));
    this.combobox.events.on("keydown", (event, id) => {
      const value = JSON.stringify({event, id});
      this.logEvent(value, "keydown");
    });
    this.combobox.events.on("beforeOpen", () => {
      this.logEvent(null, "beforeOpen");
      return true;
    });
    this.combobox.events.on("afterOpen", () => this.logEvent(null, "afterOpen"));
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
