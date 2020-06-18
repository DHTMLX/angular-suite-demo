import { Component, OnDestroy } from "@angular/core";
import { Window } from "dhx-suite";

@Component({
  selector: "app-window-event",
  template: ` <div class="component-wrapper">
    <div class="container">
      <div #widget class="widget-box-wide"></div>
      <button className="button" (click)="this.window.show(20, 20)" class="custom-button">
        Show Window
      </button>
    </div>
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
export class WindowEventComponent implements OnDestroy {
  window: Window;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    const windowHtml = `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`;
    this.window = new Window({
      width: 340,
      height: 420,
      title: "Window",
      html: windowHtml,
      closable: true,
      movable: true,
      resizable: true,
    });

    this.window.show(20, 20);

    this.window.events.on("resize", (size, oldsize, resizeSide) => {
      const info = { size, oldsize, resizeSide };
      this.logEvent(JSON.stringify(info), "resize");
    });
    this.window.events.on("headerDoubleClick", () => this.logEvent(null, "headerDoubleClick"));
    this.window.events.on("move", values => {
      this.logEvent(JSON.stringify(values), "move");
    });
    this.window.events.on("afterShow", () => this.logEvent(null, "afterShow"));
    this.window.events.on("afterHide", () => this.logEvent(null, "afterHide"));
    this.window.events.on("beforeShow", (x, y) => {
      const position = { x, y };
      this.logEvent(JSON.stringify(position), "beforeShow");
    });
    this.window.events.on("beforeHide", () => this.logEvent(null, "beforeHide"));
  }

  ngOnDestroy() {
    if (this.window) {
      this.window.destructor();
    }
  }
}
