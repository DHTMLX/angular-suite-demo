import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Colorpicker as ColorpickerDHX } from "dhx-suite";

@Component({
  selector: "app-colorpicker-configurated",
  template: ` <div #widget></div>`,
})
export class ColorpickerComponentConfigurated implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  colorpicker: any;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.colorpicker = new ColorpickerDHX(this.container.nativeElement, {
      ...this.options,
    });
  }

  ngOnDestroy() {
    if (this.colorpicker) {
      this.colorpicker.destructor();
    }
  }
}
