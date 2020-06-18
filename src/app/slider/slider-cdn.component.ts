import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from "@angular/core";
import { Slider as SliderDHX } from "dhx-suite";
import fromCDN from "from-cdn";

@Component({
  selector: "app-slider-cdn",
  template: `<div #widget style="width:400px"></div>`,
})
export class SliderCDNComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  slider: SliderDHX;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
      this.slider = new dhx.Slider(this.container.nativeElement, {});
      this.ready.emit({ slider: this.slider });
    });
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  }
}
