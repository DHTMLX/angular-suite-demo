import { Grid, Pagination } from '@dhx/trial-suite';
import { IPaginationConfig } from '@dhx/trial-suite/codebase/types/ts-pagination';
import { getData } from "./grid-data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild,
} from "@angular/core";

@Component({
  selector: 'app-grid',
  styleUrls: ['./grid.component.css'],
  template: `<div class="wrapper">
              <div #grid_container class="grid_container"></div>
              <div #pogination_container></div>
             </div>`
})
export class GridComponent implements OnInit, OnDestroy {
  @ViewChild('grid_container', { static: true }) grid_container!: ElementRef;
  @ViewChild('pogination_container', { static: true }) pogination_container!: ElementRef;

  private _grid!: Grid;
  private _pogination!: Pagination;

  ngOnInit() {
    const gridData = getData();
    const gridConfig: any = {
      data: gridData,
      columns: [
        {
          gravity: 2,
          id: 'time',
          header: [{ text: 'Time', align: 'center' }],
          type: 'date',
          dateFormat: '%M %d, %H:%i',
        },
        { id: 'nights', header: [{ text: 'Nights' }] },
        {
          id: 'price',
          header: [{ text: 'Price' }],
          type: 'number',
          numberMask: { prefix: "$" },
        },
        {
          gravity: 3,
          id: 'contactPerson',
          header: [{ text: 'Contact Person' }],
        },
        {
          gravity: 4,
          id: 'contactEmail',
          header: [{ text: 'Contact Email' }],
          htmlEnable: true,
          template: (text: any) => {
            return `<span class="contact_email";>${text}</span>`;
          }
        },
        {
          gravity: 2,
          id: 'totalCost',
          header: [{ text: 'Total Cost' }],
          type: 'number',
          numberMask: { prefix: "$" }
        }
      ],
      autoWidth: true,
      css: 'grid',
      multiselection: true,
      selection: 'complex',
      editable: true
    };

    this._grid = new Grid(this.grid_container.nativeElement, gridConfig);
    this._pogination = new Pagination(this.pogination_container.nativeElement, {
      pageSize: 20,
      // @ts-ignore
    } as IPaginationConfig);
  }

  ngOnDestroy() {
    this._grid?.destructor();
    this._pogination?.destructor();
  }
}
