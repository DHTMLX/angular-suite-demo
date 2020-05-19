import {Output, Component, ViewChild, OnDestroy, ElementRef, Input} from '@angular/core';
import {Chart as ChartDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-chart-configurated',
  template: `
      <div class="container">
          <div #widget class='widget-box-wide'></div>
      </div>`,
  styleUrls: ['../app.component.scss', './chart.scss'],
})
export class ChartConfiguratedComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  chart: ChartDHX;
  wait: Promise<void>;

  @Input() options: any;

  ngOnInit() {
    this.chart = new ChartDHX(this.container.nativeElement, {
      ...this.options
    });

    this.chart.data.load('https://dhtmlx.github.io/react-widgets/static/chart.json');
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destructor();
    }
  }
}
