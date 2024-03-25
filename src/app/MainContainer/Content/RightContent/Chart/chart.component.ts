// chart.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from '@dhx/trial-suite';
import { ChartDataService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: [],
})
export class ChartComponent implements OnInit {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  chart: any;

  constructor(private store: ChartDataService) {}

  ngOnInit() {
    this.chart = new Chart(this.chartContainer.nativeElement, {
      type: 'pie',
      series: [
        {
          value: 'value',
          // monochrome: "#0288D1",
          color: 'color',
          text: 'month',
          stroke: 'var(--dhx-background-primary)',
          strokeWidth: 0,
        },
      ],
      legend: {
        values: {
          id: 'value',
          text: 'id',
          color: 'color',
        },
        // monochrome: "#0288D1",
        halign: 'right',
        valign: 'middle',
      },
    });
    this.store.getChartData().subscribe((data: any) => {
      this.chart.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.chart?.destructor();
  }
}
