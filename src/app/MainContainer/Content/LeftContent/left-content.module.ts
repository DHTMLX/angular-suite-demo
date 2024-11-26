import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeftContentComponent } from './left-content.component';
import { GridComponent } from './Grid/grid.component';
import { CalendarsComponent } from './Calendars/calendars.component';
import { AccordionComponent } from './Accardion/accardion.component';
import { SlidersLayoutComponent } from './Sliders/sliders.component';
import { TreeComponent } from './Tree/tree.component';
import { RibbonComponent } from './Ribbon/ribbon.component';
import { TicketsDataviewComponent } from './Dataview/dataview.component';

@NgModule({
  declarations: [
    LeftContentComponent,
    GridComponent,
    CalendarsComponent,
    AccordionComponent,
    SlidersLayoutComponent,
    TreeComponent,
    RibbonComponent,
    TicketsDataviewComponent,
  ],
  imports: [BrowserModule],
  exports: [LeftContentComponent],
  providers: [],
  bootstrap: [LeftContentComponent],
})
export class LeftContentModule {}
