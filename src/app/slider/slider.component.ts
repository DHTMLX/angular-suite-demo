import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Slider as SliderDHX } from "dhx-suite";

@Component({
  selector: "app-slider",
  template: `<div #widget style="width:400px"></div>`,
})
export class SliderComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  slider: SliderDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.slider = new SliderDHX(this.container.nativeElement, {} as any);
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  }
}
