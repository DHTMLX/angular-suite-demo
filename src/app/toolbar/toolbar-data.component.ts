import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Toolbar as ToolbarDHX, TreeCollection } from "dhx-suite";

@Component({
  selector: "app-toolbar-data",
  template: ` <section>
    <div class="dhx-container--button">
      <button (click)="handleAddClick(click)" class="custom-button">Add notification</button>
      <button (click)="handleResetClick(click)" class="custom-button">Reset {{ count }} notifications</button>
    </div>
    <div #widget class="dhx-container--menu"></div>
  </section>`,
  styleUrls: ["../app.component.scss"],
})
export class ToolbarDataComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  toolbar: ToolbarDHX;
  wait: Promise<void>;

  data = new TreeCollection();
  count = 0;

  handleAddClick = () => {
    this.data.update("add", { count: this.data.getItem("add").count + 1 });
  };

  handleResetClick = () => {
    this.data.update("add", { count: 0 });
  };

  ngOnInit() {
    this.toolbar = new ToolbarDHX(this.container.nativeElement, {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      navigationType: "pointer",
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/toolbar.json").then(() => {
      this.data.events.on("change", () => {
        this.count = this.data.getItem("add").count;
      });
    });
  }

  ngOnDestroy() {
    if (this.toolbar) {
      this.toolbar.destructor();
    }
  }
}
