import { Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter } from '@angular/core';
import fromCDN from 'from-cdn';

@Component({
  selector: 'app-grid-cdn',
  template: `
    <div class="container">
      <div #widget class='widget-box-wide'></div>
    </div>`,
  styleUrls: ['../app.component.scss', './grid.scss'],
})
export class GridCDNComponent implements OnDestroy {
  @ViewChild('widget', { static: true })
  container: ElementRef;
  grid: any;
  wait: Promise<void>;

  @Output() ready: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.wait = fromCDN([
      'https://cdn.dhtmlx.com/suite/edge/suite.js',
      'https://cdn.dhtmlx.com/suite/edge/suite.css',
    ]).then(() => {
      this.grid = new dhx.Grid(this.container.nativeElement, {
        columns: [
          {minWidth: 200, id: 'country', header: [{text: 'Country'}]},
          {minWidth: 125, id: 'population', header: [{text: 'Population'}]},
          {minWidth: 125, id: 'yearlyChange', header: [{text: 'Yearly Change'}]},
          {minWidth: 125, id: 'netChange', header: [{text: 'Net Change'}]},
          {minWidth: 125, id: 'destiny', header: [{text: 'Density (P/Km²)'}]},
          {minWidth: 125, id: 'area', header: [{text: 'Land Area (Km²)'}]},
          {minWidth: 125, id: 'migrants', header: [{text: 'Migrants (net)'}]},
          {minWidth: 125, id: 'fert', header: [{text: 'Fert. Rate'}]},
          {minWidth: 125, id: 'age', header: [{text: 'Med. Age'}]},
          {minWidth: 125, id: 'urban', header: [{text: 'Urban Pop'}]},
        ],
        adjust: true,
        autoWidth: true,
      });
      this.grid.data.load(`https://dhtmlx.github.io/react-widgets/static/grid.json`);
      this.ready.emit({grid: this.grid});
    });
  }

  ngOnDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  }
}
