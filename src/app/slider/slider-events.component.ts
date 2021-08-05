import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Slider as SliderDHX } from "dhx-suite";

@Component({
  selector: "app-slider-events",
  template: `
    <div class="component-wrapper">
      <div #widget style="width:400px"></div>
      <div class="events-list events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor="let event of eventsList">
          <p>{{ event.name }}</p>
          <p>{{ event.payload }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../app.component.scss"],
})
export class SliderEventsComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  slider: SliderDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.slider = new SliderDHX(this.container.nativeElement, {
      min: 0,
      max: 100,
      step: 1,
      tooltip: true,
      tick: 1,
      majorTick: 10,
      tickTemplate: v => v.toString(),
    });

    this.slider.events.on("change", id => this.logEvent(id, "change"));
    this.slider.events.on("mousedown", id => this.logEvent(id, "mousedown"));
    this.slider.events.on("mouseup", id => this.logEvent(id, "mouseup"));
    this.slider.events.on("blur", () => this.logEvent(null, "blur"));
    this.slider.events.on("focus", () => this.logEvent(null, "focus"));
    this.slider.events.on("keydown", (event) => {
      const value = JSON.stringify({ event });
      this.logEvent(value, "keydown");
    });
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  }
}
