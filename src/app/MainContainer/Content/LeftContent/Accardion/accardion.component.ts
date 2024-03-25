// accordion.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, Layout } from '@dhx/trial-suite';
import { ChartDataService } from './accardion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accardion.component.html',
  styleUrls: [],
})
export class AccordionComponent implements OnInit {
  @ViewChild('accordionNode', { static: true }) accordionNode!: ElementRef;
  accordion: any;
  chart: any;

  constructor(private store: ChartDataService) {}

  ngOnInit() {
    this.accordion = new Layout(this.accordionNode.nativeElement, {
      type: 'line',
      rows: [
        {
          header: 'HOTELS',
          height: '500px',
          padding: 40,
          id: 'chart',
          collapsable: true,
        },
      ],
    });

    this.chart = new Chart('', {
      type: 'bar',
      scales: {
        bottom: {
          text: 'month',
        },
        left: {
          maxTicks: 10,
          max: 100,
          min: 0,
        },
      },
      series: [
        {
          id: 'A',
          value: 'Won deals',
          color: 'none',
          fill: 'var(--dhx-color-primary)',
          showText: true,
          showTextTemplate: (sum) => `$${sum}`,
        },
        {
          id: 'B',
          value: 'Lost deals',
          color: 'none',
          fill: 'var(--dhx-color-primary-light-active)',
          showText: true,
          showTextTemplate: (sum) => `$${sum}`,
        },
        {
          id: 'all',
          value: 'All deals',
          color: 'none',
          fill: 'var(--dhx-color-primary-disabled)',
          type: 'area',
          strokeWidth: 0,
        },
      ],
      legend: {
        series: ['A', 'B', 'all'],
        halign: 'right',
        valign: 'top',
        itemPadding: 20,
        margin: 40,
      },
    });

    this.accordion.getCell('chart').attach(this.chart);
    this.store.getHotelsData().subscribe((data: any) => {
      this.chart.data.parse(data);
    });
  }

  ngOnDestroy() {
    this.accordion?.destructor();
    this.chart?.destructor();
  }
}
