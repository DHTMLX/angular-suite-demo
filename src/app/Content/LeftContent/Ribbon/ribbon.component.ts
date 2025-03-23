import { Ribbon } from '@dhx/trial-suite';
import { getData } from "./ribbon-data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
} from "@angular/core";

@Component({
  selector: 'app-ribbon',
  template: `<div #ribbon_container class="container"></div>`,
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit, OnDestroy {
  @ViewChild('ribbon_container', { static: true }) ribbon_container!: ElementRef;

  private _ribbon!: Ribbon;

  ngOnInit() {
    const ribbonData = getData();
    this._ribbon = new Ribbon(this.ribbon_container.nativeElement, {
      data: ribbonData,
      css: 'dhx_widget--bordered'
    });
  }

  ngOnDestroy() {
    this._ribbon?.destructor();
  }
}
