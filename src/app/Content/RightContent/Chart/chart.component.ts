import { Chart } from '@dhx/trial-suite';
import { getData } from "./chart-data";

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-chart',
  template: `<div #chart_container class="container"></div>`
})

export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild('chart_container', { static: true }) chart_container!: ElementRef;
  
  private _chart!: Chart;

  ngOnInit() {
    const chartData = getData();
    this._chart = new Chart(this.chart_container.nativeElement, {
      data: chartData,
      type: 'pie',
      series: [
        {
          value: 'value',
          // monochrome: "#0288D1",
          color: 'color',
          text: 'month',
          stroke: 'var(--dhx-background-primary)',
          strokeWidth: 0
        },
      ],
      legend: {
        values: {
          id: 'value',
          text: 'id',
          color: 'color'
        },
        // monochrome: "#0288D1",
        halign: 'right',
        valign: 'middle'
      }
    });
  }

  ngOnDestroy() {
    this._chart?.destructor();
  }
}
