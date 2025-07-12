import { Tree } from "@dhx/trial-suite";
import { getData } from "../../../app.data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-tree",
  template: `<div #tree_container class="tree_widget"></div>`
})

export class TreeComponent implements OnInit, OnDestroy {
  @ViewChild("tree_container", { static: true }) tree_container!: ElementRef;

  private _tree!: Tree;

  ngOnInit() {
    const { treeData } = getData();
    this._tree = new Tree(this.tree_container.nativeElement, {
      data: treeData,
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: "both"
    });
  }

  ngOnDestroy() {
    this._tree?.destructor();
  }
}
