import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { DataView as DataviewDHX } from "dhx-suite";

@Component({
  selector: "app-dataview-configurated",
  template: `<div #widget style="height: 400px; padding: 0 24px"></div>`,
})
export class DataviewConfiguratedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  dataview: DataviewDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.dataview = new DataviewDHX(this.container.nativeElement, {
      ...this.options,
    });

    this.dataview.data.load("https://dhtmlx.github.io/react-widgets/static/dataview.json");
  }

  ngOnDestroy() {
    if (this.dataview) {
      this.dataview.destructor();
    }
  }
}
