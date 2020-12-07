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
  timepicker: SliderDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.timepicker = new SliderDHX(this.container.nativeElement, {
      min: 0,
      max: 100,
      step: 1,
      tooltip: true,
      tick: 1,
      majorTick: 10,
      tickTemplate: v => v.toString(),
    });

    this.timepicker.events.on("change", id => this.logEvent(id, "change"));
    this.timepicker.events.on("mousedown", id => this.logEvent(id, "mousedown"));
    this.timepicker.events.on("mouseup", id => this.logEvent(id, "mouseup"));
  }

  ngOnDestroy() {
    if (this.timepicker) {
      this.timepicker.destructor();
    }
  }
}
