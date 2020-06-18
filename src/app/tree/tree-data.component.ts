import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Tree as TreeDHX, TreeCollection } from "dhx-suite";

@Component({
  selector: "app-tree-data",
  template: ` <section>
    <div class="dhx-container--button">
      <button (click)="handleClick(false)" class="custom-button">Collapse All</button>
      <button (click)="handleClick(true)" class="custom-button">Expand All</button>
    </div>
    <div #widget class="dhx-container--tree"></div>
  </section>`,
  styleUrls: ["../app.component.scss"],
})
export class TreeDataComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  tree: TreeDHX;
  wait: Promise<void>;

  data = new TreeCollection();

  handleClick = value => {
    this.data.map(item => {
      this.data.update(item.id, { opened: value });
    });
  };

  ngOnInit() {
    this.tree = new TreeDHX(this.container.nativeElement, {
      data: this.data,
    });

    this.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");
  }

  ngOnDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  }
}
