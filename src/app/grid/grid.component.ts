import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Grid as GridDHX } from "dhx-suite";

@Component({
  selector: "app-grid",
  template: `<div #widget class="dhx-container--grid"></div>`,
  styleUrls: ["../app.component.scss"],
})
export class GridComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  grid: GridDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.grid = new GridDHX(this.container.nativeElement, {
      columns: [
        { minWidth: 200, id: "country", header: [{ text: "Country" }] },
        { minWidth: 125, id: "population", header: [{ text: "Population" }] },
        { minWidth: 125, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        { minWidth: 125, id: "netChange", header: [{ text: "Net Change" }] },
        { minWidth: 125, id: "destiny", header: [{ text: "Density (P/Km²)" }] },
        { minWidth: 125, id: "area", header: [{ text: "Land Area (Km²)" }] },
        { minWidth: 125, id: "migrants", header: [{ text: "Migrants (net)" }] },
        { minWidth: 125, id: "fert", header: [{ text: "Fert. Rate" }] },
        { minWidth: 125, id: "age", header: [{ text: "Med. Age" }] },
        { minWidth: 125, id: "urban", header: [{ text: "Urban Pop" }] },
      ],
      adjust: true,
      autoWidth: true,
    });
    this.grid.data.load(`https://dhtmlx.github.io/react-widgets/static/grid.json`);
  }

  ngOnDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  }
}
