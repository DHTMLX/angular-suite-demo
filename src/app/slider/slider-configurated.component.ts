import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Slider as SliderDHX } from "dhx-suite";

@Component({
  selector: "app-slider-configurated",
  template: `<div #widget style="width:400px"></div>`,
})
export class SliderConfiguraetedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  slider: SliderDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.slider = new SliderDHX(this.container.nativeElement, {
      ...this.options,
    });
  }

  ngOnDestroy() {
    if (this.slider) {
      this.slider.destructor();
    }
  }
}
