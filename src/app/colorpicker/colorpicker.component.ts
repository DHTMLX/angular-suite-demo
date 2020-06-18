import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Colorpicker as ColorpickerDHX } from "dhx-suite";

@Component({
  selector: "app-colorpicker",
  template: `<div #widget></div>`,
})
export class ColorPickerComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  colorPicker: any;
  wait: Promise<void>;

  ngOnInit() {
    this.colorPicker = new ColorpickerDHX(this.container.nativeElement);
  }

  ngOnDestroy() {
    if (this.colorPicker) {
      this.colorPicker.destructor();
    }
  }
}
