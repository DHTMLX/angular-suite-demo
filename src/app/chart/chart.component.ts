import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Chart as ChartDHX } from 'dhx-suite';

@Component({
  selector: 'app-chart',
  template: `
    <section style="width: 600px">
      <div #widget></div>
    </section>`,
  styleUrls: ['../app.component.scss'],
})
export class ChartComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  chart: ChartDHX;
  wait: Promise<void>;

  ngOnInit() {
    this.chart = new ChartDHX(this.container.nativeElement, {
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
          value: 'company C',
          color: '#5E83BA',
          pointType: 'circle',
          fill: '#5E83BA',
          barWidth: 35,
        },
      ],
    });

    this.chart.data.load('https://dhtmlx.github.io/react-widgets/static/chart.json');
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destructor();
    }
  }
}
