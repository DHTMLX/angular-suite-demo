import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Chart as ChartDHX } from 'dhx-suite';

@Component({
  selector: 'app-chart-event',
  template: `
    <div class="component-wrapper">
      <div style="width: 600px">
        <div #widget></div>
      </div>
      <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss'],
})
export class ChartEventComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  chart: ChartDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.chart = new ChartDHX(this.container.nativeElement, {
      type: 'bar',
      resizable: true,
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
          value: 'company A',
          color: '#81C4E8',
          fill: '#81C4E8'
        },
        {
          id: 'B',
          value: 'company B',
          color: '#5E83BA',
          fill: '#5E83BA'
        },
      ],
      legend: {
        series: ['A', 'B'],
        halign: 'right',
        valign: 'top'
      }
    });

    this.chart.data.load('https://dhtmlx.github.io/react-widgets/static/chart.json');

    this.chart.events.on('toggleSeries', (id) => this.logEvent(id, 'toggleSeries'));
    this.chart.events.on('resize', (size) => this.logEvent(JSON.stringify(size), 'resize'));
    this.chart.events.on('serieClick', (id, value) => {
      const infoSerieClick = { id, value };
      this.logEvent(JSON.stringify(infoSerieClick), 'serieClick');
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destructor();
    }
  }
}
