import {Output, Component, ViewChild, OnDestroy, ElementRef, EventEmitter} from '@angular/core';
import {Grid as GridDHX, DataCollection} from 'dhx-suite';

@Component({
  selector: 'app-grid-data',
  template: `
      <div>
          <div class='buttons-container'>
              <button (click)="handleClick('reset')">Reset</button>
              <button (click)="handleClick('remove')">Remove first row</button>
          </div>
          <div class="container">
              <div #widget class='widget-box-wide'></div>
          </div>
      </div>`,
  styleUrls: ['./grid.scss'],
})
export class GridDataComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  grid: GridDHX;
  wait: Promise<void>;

  data = new DataCollection();

  handleClick = (action) => {
    if (action === 'reset') {
      this.data.removeAll();
      this.data.load(`https://dhtmlx.github.io/react-widgets/static/grid.json`);
    } else if (action === 'remove') {
      this.data.remove(this.data.getId(0));
    }
  };

  ngOnInit() {
    this.grid = new GridDHX(this.container.nativeElement, {
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
      data: this.data,
    });
    this.data.load(`https://dhtmlx.github.io/react-widgets/static/grid.json`);
  }

  ngOnDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  }
}
