// grid.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Grid, Pagination } from '@dhx/trial-suite';
import { GridDataService } from './grid-data.service';
import { IPaginationConfig } from '@dhx/trial-suite/codebase/types/ts-pagination';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @ViewChild('gridNode', { static: true }) gridNode!: ElementRef;
  @ViewChild('paginatorNode', { static: true }) paginatorNode!: ElementRef;
  grid: any;
  paginator: any;

  constructor(private store: GridDataService) { }

  ngOnInit() {
    const gridConfig: any = {
      columns: [
        {
          gravity: 2,
          id: "time",
          header: [{ text: "Time", align: "center" }],
          type: "date",
          format: "%M %d, %H:%i",
        },
        { id: "nights", header: [{ text: "Nights" }] },
        {
          id: "price",
          header: [{ text: "Price" }],
          type: "number",
          format: "# #",
          template: (i: any) => `$ ${i}`,
        },
        {
          gravity: 3,
          id: "contactPerson",
          header: [{ text: "Contact Person" }],
        },
        {
          gravity: 4,
          id: "contactEmail",
          header: [{ text: "Contact Email" }],
          htmlEnable: true,
          template: (text: any) => {
            return `<span class="contact_email";>${text}</span>`;
          },
        },
        {
          gravity: 2,
          id: "totalCost",
          header: [{ text: "Total Cost" }],
          type: "number",
          format: "# #",
          template: (i: any) => `$${i}`,
        },
      ],
      autoWidth: true,
      css: "grid",
      multiselection: true,
      selection: "complex",
      editable: true,
    }

    this.grid = new Grid(this.gridNode.nativeElement, gridConfig);
    this.paginator = new Pagination(this.paginatorNode.nativeElement, {
      pageSize: 20,
      // @ts-ignore
      data: this.grid.data,
    } as IPaginationConfig);
    this.store.getGridData().subscribe((data: any) => {
      this.grid?.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.grid && this.grid.destructor();
    this.paginator && this.paginator.destructor();
  }
}