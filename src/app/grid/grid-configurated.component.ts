import { Component, ViewChild, OnDestroy, ElementRef, Input } from "@angular/core";
import { Grid as GridDHX } from "dhx-suite";

@Component({
  selector: "app-grid-configurated",
  template: `<div #widget class="dhx-container--grid"></div>`,
  styleUrls: ["../app.component.scss"],
})
export class GridConfiguratedComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  grid: GridDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.grid = new GridDHX(this.container.nativeElement, {
      ...this.options,
    });
    this.grid.data.load(`https://dhtmlx.github.io/react-widgets/static/grid.json`);
  }

  ngOnDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  }
}
