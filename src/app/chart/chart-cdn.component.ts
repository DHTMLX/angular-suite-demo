import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import fromCDN from 'from-cdn';

declare const dhx;

@Component({
  selector: 'app-chart-cdn',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['./chart.scss'],
})
export class ChartCDNComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  chart: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.chart = new dhx.Chart(this.container.nativeElement, {
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
      this.ready.emit({chart: this.chart});
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destructor();
    }
  }
}
