import { Component, ViewChild, OnDestroy, ElementRef } from "@angular/core";
import { Tree as TreeDHX } from "dhx-suite";

@Component({
  selector: "app-tree-event",
  template: ` <div class="component-wrapper">
    <div #widget class="dhx-container--tree"></div>
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
export class TreeEventComponent implements OnDestroy {
  @ViewChild("widget", { static: true })
  container: ElementRef;
  tree: TreeDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{ name, payload }].concat(this.eventsList);
  };

  ngOnInit() {
    this.tree = new TreeDHX(this.container.nativeElement);

    this.tree.data.load("https://dhtmlx.github.io/react-widgets/static/tree.json");

    this.tree.events.on("itemRightClick", id => this.logEvent(id, "itemRightClick"));
    this.tree.events.on("itemDblClick", id => this.logEvent(id, "itemDblClick"));
    this.tree.events.on("itemClick", id => this.logEvent(id, "itemClick"));
    this.tree.events.on("beforeCollapse", id => {
      this.logEvent(id, "beforeCollapse");
      return true;
    });
    this.tree.events.on("afterCollapse", id => this.logEvent(id, "afterCollapse"));
    this.tree.events.on("beforeExpand", id => {
      this.logEvent(id, "beforeExpand");
      return true;
    });
    this.tree.events.on("afterExpand", id => this.logEvent(id, "afterExpand"));
    this.tree.events.on("beforeCheck", (index, id) => {
      const value = JSON.stringify({index, id});
      console.log(value, "beforeCheck");
    });
    this.tree.events.on("afterCheck", (index, id) => {
      const value = JSON.stringify({index, id});
      this.logEvent(value, "afterCheck");
    });
  }

  ngOnDestroy() {
    if (this.tree) {
      this.tree.destructor();
    }
  }
}
