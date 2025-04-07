import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LeftContentComponent } from './left-content.component';
import { GridComponent } from './Grid/grid.component';
import { CalendarsComponent } from './Calendars/calendars.component';
import { ChartComponent } from './Chart/chart.component';
import { SlidersLayoutComponent } from './Sliders/sliders.component';
import { TreeComponent } from './Tree/tree.component';
import { RibbonComponent } from './Ribbon/ribbon.component';
import { TicketsDataviewComponent } from './TicketsDataview/tickets-dataview.component';

@NgModule({
  declarations: [
    LeftContentComponent,
    GridComponent,
    CalendarsComponent,
    ChartComponent,
    SlidersLayoutComponent,
    TreeComponent,
    RibbonComponent,
    TicketsDataviewComponent,
  ],
  imports: [BrowserModule],
  exports: [LeftContentComponent],
  bootstrap: [LeftContentComponent]
})

export class LeftContentModule {}
