import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Combobox as ComboboxDHX } from "dhx-suite";

@Component({
  selector: "app-combobox",
  template: `<div #widget style="width: 400px"></div>`,
  styleUrls: ["../app.component.scss"],
})
export class ComboboxComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      placeholder: "Click to choose",
    });

    this.combobox.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
