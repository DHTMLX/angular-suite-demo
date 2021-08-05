import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Combobox as ComboboxDHX, DataCollection } from "dhx-suite";

@Component({
  selector: "app-combobox-data",
  template: ` <section class="dhx-container">
    <div class="dhx-container--button">
      <button (click)="handleClick()" class="custom-button">Select first item</button>
    </div>
    <div #widget style="width:400px"></div>
  </section>`,
  styleUrls: ["../app.component.scss"],
})
export class ComboboxDataComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  combobox: ComboboxDHX;
  wait: Promise<void>;

  data = new DataCollection();

  handleClick() {
    this.combobox.setValue(this.data.getId(0));
  }

  ngOnInit() {
    this.combobox = new ComboboxDHX(this.container.nativeElement, {
      placeholder: "Click to choose",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/combobox.json");
  }

  ngOnDestroy() {
    if (this.combobox) {
      this.combobox.destructor();
    }
  }
}
