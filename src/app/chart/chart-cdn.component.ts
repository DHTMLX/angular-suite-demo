import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-chart-cdn',
  template: `
    <section style="width: 600px">
      <div #widget></div>
    </section>`,
})
export class ChartCDNComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
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
        type: "line",
				scales: {
					"bottom": {
						text: "month"
					},
					"left": {
						maxTicks: 10,
						max: 100,
						min: 0
					}
				},
				series: [
					{
						id: "A",
						value: "company C",
						color: "#5E83BA",
						pointType: "circle",
						fill: "#5E83BA",
						barWidth: 35
					}
				]
      });
      this.chart.data.load('https://dhtmlx.github.io/react-widgets/static/chart.json');
      this.ready.emit({chart: this.chart});
    });
  }

  ngOnDestroy() {
    this.chart && this.chart.destructor();
  }
}
