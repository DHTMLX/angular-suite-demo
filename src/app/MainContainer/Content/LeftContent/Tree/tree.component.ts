// tree.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tree } from '@dhx/trial-suite';
import { TreeDataService } from './tree-data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: [],
})
export class TreeComponent implements OnInit {
  @ViewChild('treeNode', { static: true }) treeNode!: ElementRef;
  tree: any;

  constructor(private store: TreeDataService) {}

  ngOnInit() {
    this.tree = new Tree(this.treeNode.nativeElement, {
      checkbox: true,
      editable: true,
      keyNavigation: true,
      dragMode: 'both',
    });

    this.store.getTreeData().subscribe((data: any) => {
      this.tree.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.tree?.destructor();
  }
}
