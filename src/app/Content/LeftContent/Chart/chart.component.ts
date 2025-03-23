import { Chart, Layout } from '@dhx/trial-suite';
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
  template: `<div #layout_container class="container"></div>`
})

export class ChartComponent implements OnInit, OnDestroy {
  @ViewChild('layout_container', { static: true }) layout_container!: ElementRef;

  private _layout!: Layout;
  private _chart!: Chart;

  ngOnInit() {
    const { seriesData, hotelsData } = getData();
    this._layout = new Layout(this.layout_container.nativeElement, {
      type: 'line',
      rows: [
        {
          header: 'HOTELS',
          height: '500px',
          padding: 40,
          id: 'chart',
          collapsable: true
        }
      ]
    });

    this._chart = new Chart('', {
      data: hotelsData,
      type: 'bar',
      scales: {
        bottom: {
          text: 'month'
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0
        }
      },
      series: seriesData,
      legend: {
        series: ['A', 'B', 'all'],
        halign: 'right',
        valign: 'top',
        itemPadding: 20,
        margin: 40
      }
    });

    this._layout.getCell('chart').attach(this._chart);
  }

  ngOnDestroy() {
    this._layout?.destructor();
    this._chart?.destructor();
  }
}
