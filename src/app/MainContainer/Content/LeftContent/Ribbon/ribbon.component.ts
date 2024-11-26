// ribbon.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ribbon } from '@dhx/trial-suite';
import { RibbonDataService } from './ribbon-data.service';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css'],
})
export class RibbonComponent implements OnInit {
  @ViewChild('ribbonNode', { static: true }) ribbonNode!: ElementRef;
  ribbon: any;

  constructor(private store: RibbonDataService) {}

  ngOnInit() {
    this.ribbon = new Ribbon(this.ribbonNode.nativeElement, {
      css: 'dhx_widget--bordered',
    });

    this.store.getRibbonData().subscribe((data: any) => {
      this.ribbon.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.ribbon?.destructor();
  }
}
