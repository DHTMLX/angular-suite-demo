import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Grid as GridDHX } from "dhx-suite";

@Component({
  selector: "app-grid-event",
  template: ` <div class="component-wrapper">
    <div #widget class="dhx-container--grid" style="width: 800px"></div>
    <div class="events-list events-list-wrapper">
      <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
      <div class="events-list--element" *ngFor="let event of eventsList">
        <p>{{ event.name }}</p>
        <p>{{ event.payload }}</p>
      </div>
    </div>
  </div>`,
  styleUrls: ["../app.component.scss"],
})
export class GridEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  grid: GridDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (name: string, payload?: any) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.grid = new GridDHX(this.container.nativeElement, {
      columns: [
        { minWidth: 200, id: "country", header: [{ text: "Country" }], footer: [{ text: "Country" }] },
        { minWidth: 125, id: "population", header: [{ text: "Population" }], footer: [{ text: "Population" }] },
        { minWidth: 125, id: "yearlyChange", header: [{ text: "Yearly Change" }], footer: [{ text: "Yearly Change" }] },
        { minWidth: 125, id: "netChange", header: [{ text: "Net Change" }], footer: [{ text: "Net Change" }] },
        { minWidth: 125, id: "destiny", header: [{ text: "Density (P/Km²)" }], footer: [{ text: "Density (P/Km²)" }] },
        { minWidth: 125, id: "area", header: [{ text: "Land Area (Km²)" }], footer: [{ text: "Land Area (Km²)" }] },
        { minWidth: 125, id: "migrants", header: [{ text: "Migrants (net)" }], footer: [{ text: "Migrants (net)" }] },
        { minWidth: 125, id: "fert", header: [{ text: "Fert. Rate" }], footer: [{ text: "Fert. Rate" }] },
        { minWidth: 125, id: "age", header: [{ text: "Med. Age" }], footer: [{ text: "Med. Age" }] },
        { minWidth: 125, id: "urban", header: [{ text: "Urban Pop" }], footer: [{ text: "Urban Pop" }] },
      ],
      adjust: true,
      selection: "complex",
      editable: true,
      resizable: true,
    });
    this.grid.data.load("https://dhtmlx.github.io/react-widgets/static/grid.json");

    this.grid.events.on("scroll", position => this.logEvent("scroll", JSON.stringify(position)));
    this.grid.events.on("sort", id => this.logEvent("sort", id));
    this.grid.events.on("expand", id => this.logEvent("expand", id));
    this.grid.events.on("filterChange", (value, colId, filter) => {
      const infoFilter = { value, colId, filter };
      this.logEvent("filterChange", JSON.stringify(infoFilter));
    });
    this.grid.events.on("cellClick", (row, column, e) => {
      const infoCellClick = { row, column, event: e };
      this.logEvent("cellClick", JSON.stringify(infoCellClick));
    });
    this.grid.events.on("cellRightClick", (row, column, e) => {
      const infoRightClick = { row, column, event: e };
      this.logEvent("cellRightClick", JSON.stringify(infoRightClick));
    });
    this.grid.events.on("cellMouseOver", (row, column, e) => {
      const infoMouseOver = { row, column, event: e };
      this.logEvent("cellMouseOver", JSON.stringify(infoMouseOver));
    });
    this.grid.events.on("cellMouseDown", (row, column, e) => {
      const infoMouseDown = { row, column, event: e };
      this.logEvent("cellMouseDown", JSON.stringify(infoMouseDown));
    });
    this.grid.events.on("cellDblClick", (row, column, e) => {
      const infoDblClick = { row, column, event: e };
      this.logEvent("cellDblClick", JSON.stringify(infoDblClick));
    });
    this.grid.events.on("headerCellClick", (column, e) => {
      const infoHeaderCellClick = { column, event: e };
      this.logEvent("headerCellClick", JSON.stringify(infoHeaderCellClick));
    });
    this.grid.events.on("footerCellClick", (column, e) => {
      const infoFooterCellClick = { column, event: e };
      this.logEvent("footerCellClick", JSON.stringify(infoFooterCellClick));
    });
    this.grid.events.on("headerCellMouseOver", (column, e) => {
      const infoHeaderCellMouseOver = { column, event: e };
      this.logEvent("headerCellMouseOver", JSON.stringify(infoHeaderCellMouseOver));
    });
    this.grid.events.on("footerCellMouseOver", (column, e) => {
      const infoFooterCellMouseOver = { column, event: e };
      this.logEvent("footerCellMouseOver", JSON.stringify(infoFooterCellMouseOver));
    });
    this.grid.events.on("headerCellMouseDown", (column, e) => {
      const infoHeaderCellMouseDown = { column, event: e };
      this.logEvent("headerCellMouseDown", JSON.stringify(infoHeaderCellMouseDown));
    });
    this.grid.events.on("footerCellMouseDown", (column, e) => {
      const infoFooterCellMouseDown = { column, event: e };
      this.logEvent("footerCellMouseDown", JSON.stringify(infoFooterCellMouseDown));
    });
    this.grid.events.on("headerCellDblClick", (column, e) => {
      const infoHeaderCellDblClick = { column, event: e };
      this.logEvent("headerCellDblClick", JSON.stringify(infoHeaderCellDblClick));
    });
    this.grid.events.on("footerCellDblClick", (column, e) => {
      const infoFooterCellDblClick = { column, event: e };
      this.logEvent("footerCellDblClick", JSON.stringify(infoFooterCellDblClick));
    });
    this.grid.events.on("headerCellRightClick", (column, e) => {
      const infoHeaderCellRightClick = { column, event: e };
      this.logEvent("headerCellRightClick", JSON.stringify(infoHeaderCellRightClick));
    });
    this.grid.events.on("footerCellRightClick", (column, e) => {
      const infoFooterCellRightClick = { column, event: e };
      this.logEvent("footerCellRightClick", JSON.stringify(infoFooterCellRightClick));
    });
    this.grid.events.on("beforeEditStart", (row, col, editorType) => {
      const infoBeforeEditStart = { row, col, editorType };
      this.logEvent("beforeEditStart", JSON.stringify(infoBeforeEditStart));
    });
    this.grid.events.on("afterEditStart", (row, col, editorType) => {
      const infoAfterEditStart = { row, col, editorType };
      this.logEvent("afterEditStart", JSON.stringify(infoAfterEditStart));
    });
    this.grid.events.on("beforeEditEnd", (value, row, column) => {
      const infoBeforeEditEnd = { value, row, column };
      this.logEvent("beforeEditEnd", JSON.stringify(infoBeforeEditEnd));
    });
    this.grid.events.on("afterEditEnd", (value, row, column) => {
      const infoAfterEditEnd = { value, row, column };
      this.logEvent("afterEditEnd", JSON.stringify(infoAfterEditEnd));
    });
    this.grid.events.on("beforeResizeStart", (column, e) => {
      const infoBeforeResizeStart = { column, event: e };
      this.logEvent("beforeResizeStart", JSON.stringify(infoBeforeResizeStart));
    });
    this.grid.events.on("resize", (column, e) => {
      const infoResize = { column, event: e };
      this.logEvent("resize", JSON.stringify(infoResize));
    });
    this.grid.events.on("afterResizeEnd", (column, e) => {
      const infoAfterResizeEnd = { column, event: e };
      this.logEvent("afterResizeEnd", JSON.stringify(infoAfterResizeEnd));
    });
    this.grid.events.on("beforeKeyDown", e => this.logEvent("beforeKeyDown", JSON.stringify(e)));
    this.grid.events.on("afterKeyDown", e => this.logEvent("afterKeyDown", JSON.stringify(e)));
    this.grid.events.on("beforeRowDrag", () => this.logEvent("beforeRowDrag"));
    this.grid.events.on("dragRowStart", () => this.logEvent("dragRowStart"));
    this.grid.events.on("dragRowOut", () => this.logEvent("dragRowOut"));
    this.grid.events.on("dragRowIn", () => this.logEvent("dragRowIn"));
    this.grid.events.on("canRowDrop", () => this.logEvent("canRowDrop"));
    this.grid.events.on("cancelRowDrop", () => this.logEvent("cancelRowDrop"));
    this.grid.events.on("beforeRowDrop", () => this.logEvent("beforeRowDrop"));
    this.grid.events.on("afterRowDrop", () => this.logEvent("afterRowDrop"));
    this.grid.events.on("afterRowDrag", () => this.logEvent("afterRowDrag"));
    this.grid.events.on("beforeColumnDrag", () => this.logEvent("beforeColumnDrag"));
    this.grid.events.on("dragColumnStart", () => this.logEvent("dragColumnStart"));
    this.grid.events.on("dragColumnOut", () => this.logEvent("dragColumnOut"));
    this.grid.events.on("dragColumnIn", () => this.logEvent("dragColumnIn"));
    this.grid.events.on("canColumnDrop", () => this.logEvent("canColumnDrop"));
    this.grid.events.on("cancelColumnDrop", () => this.logEvent("cancelColumnDrop"));
    this.grid.events.on("beforeColumnDrop", () => this.logEvent("beforeColumnDrop"));
    this.grid.events.on("afterColumnDrop", () => this.logEvent("afterColumnDrop"));
    this.grid.events.on("afterColumnDrag", () => this.logEvent("afterColumnDrag"));
    this.grid.events.on("beforeColumnHide", () => this.logEvent("beforeColumnHide"));
    this.grid.events.on("afterColumnHide", () => this.logEvent("afterColumnHide"));
    this.grid.events.on("beforeColumnShow", () => this.logEvent("beforeColumnShow"));
    this.grid.events.on("afterColumnShow", () => this.logEvent("afterColumnShow"));
    this.grid.events.on("beforeRowHide", () => this.logEvent("beforeRowHide"));
    this.grid.events.on("afterRowHide", () => this.logEvent("afterRowHide"));
    this.grid.events.on("beforeRowShow", () => this.logEvent("beforeRowShow"));
    this.grid.events.on("afterRowShow", () => this.logEvent("afterRowShow"));
    this.grid.events.on("beforeUnSelect", () => this.logEvent("beforeUnSelect"));
    this.grid.events.on("afterUnSelect", () => this.logEvent("afterUnSelect"));
    this.grid.events.on("beforeSelect", () => this.logEvent("beforeSelect"));
    this.grid.events.on("afterSelect", () => this.logEvent("afterSelect"));
  }

  ngOnDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  }
}
