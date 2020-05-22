import { Component, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { Grid as GridDHX } from 'dhx-suite';

@Component({
  selector: 'app-grid-event',
  template: `
    <div class="component-wrapper">
      <div #widget class='widget-box'></div>
      <div class="events-list-wrapper">
        <div class="events-list--element" *ngIf="this.eventsList.length == 0">No events yet</div>
        <div class="events-list--element" *ngFor='let event of eventsList'>
          <p>{{event.name}}</p>
          <p>{{event.payload}}</p>
        </div>
      </div>
    </div>`,
  styleUrls: ['../app.component.scss', './grid.scss'],
})
export class GridEventComponent implements OnDestroy {
  @ViewChild('widget', {static: true})
  container: ElementRef;
  grid: GridDHX;
  wait: Promise<void>;

  eventsList = [];

  logEvent = (payload, name: string) => {
    this.eventsList = [{name, payload}].concat(this.eventsList);
  };

  ngOnInit() {
    this.grid = new GridDHX(this.container.nativeElement, {
      columns: [
        {minWidth: 200, id: 'country', header: [{text: 'Country'}], footer: [{text: 'Country'}]},
        {minWidth: 125, id: 'population', header: [{text: 'Population'}], footer: [{text: 'Population'}]},
        {minWidth: 125, id: 'yearlyChange', header: [{text: 'Yearly Change'}], footer: [{text: 'Yearly Change'}]},
        {minWidth: 125, id: 'netChange', header: [{text: 'Net Change'}], footer: [{text: 'Net Change'}]},
        {minWidth: 125, id: 'destiny', header: [{text: 'Density (P/Km²)'}], footer: [{text: 'Density (P/Km²)'}]},
        {minWidth: 125, id: 'area', header: [{text: 'Land Area (Km²)'}], footer: [{text: 'Land Area (Km²)'}]},
        {minWidth: 125, id: 'migrants', header: [{text: 'Migrants (net)'}], footer: [{text: 'Migrants (net)'}]},
        {minWidth: 125, id: 'fert', header: [{text: 'Fert. Rate'}], footer: [{text: 'Fert. Rate'}]},
        {minWidth: 125, id: 'age', header: [{text: 'Med. Age'}], footer: [{text: 'Med. Age'}]},
        {minWidth: 125, id: 'urban', header: [{text: 'Urban Pop'}], footer: [{text: 'Urban Pop'}]},
      ],
      adjust: true,
      autoWidth: true,
      selection: true,
      editable: true,
      resizable: true,
      dragMode: 'both',
    });
    this.grid.data.load(`https://dhtmlx.github.io/react-widgets/static/grid.json`);

    this.grid.events.on('scroll', (position) => this.logEvent(JSON.stringify(position), 'scroll'));
    this.grid.events.on('sort', (id) => this.logEvent(id, 'sort'));
    this.grid.events.on('expand', (id) => this.logEvent(id, 'expand'));
    this.grid.events.on('filterChange', (value, colId, filter) => {
      const infoFilter = {value, colId, filter};
      this.logEvent(JSON.stringify(infoFilter), 'filterChange');
    });
    this.grid.events.on('cellClick', (row, column, e) => {
      const infoCellClick = {row, column, event: e};
      this.logEvent(JSON.stringify(infoCellClick), 'cellClick');
    });

    this.grid.events.on('cellRightClick', (row, column, e) => {
      const infoRightClick = {row, column, event: e};
      this.logEvent(JSON.stringify(infoRightClick), 'cellRightClick');
    });

    this.grid.events.on('cellMouseOver', (row, column, e) => {
      const infoMouseOver = {row, column, event: e};
      this.logEvent(JSON.stringify(infoMouseOver), 'cellMouseOver');
    });

    this.grid.events.on('cellMouseDown', (row, column, e) => {
      const infoMouseDown = {row, column, event: e};
      this.logEvent(JSON.stringify(infoMouseDown), 'cellMouseDown');
    });

    this.grid.events.on('cellDblClick', (row, column, e) => {
      const infoDblClick = {row, column, event: e};
      this.logEvent(JSON.stringify(infoDblClick), 'cellDblClick');
    });

    this.grid.events.on('headerCellClick', (column, e) => {
      const infoHeaderCellClick = {column, event: e};
      this.logEvent(JSON.stringify(infoHeaderCellClick), 'headerCellClick');
    });

    this.grid.events.on('footerCellClick', (column, e) => {
      const infoFooterCellClick = {column, event: e};
      this.logEvent(JSON.stringify(infoFooterCellClick), 'footerCellClick');
    });

    this.grid.events.on('headerCellMouseOver', (column, e) => {
      const infoHeaderCellMouseOver = {column, event: e};
      this.logEvent(JSON.stringify(infoHeaderCellMouseOver), 'headerCellMouseOver');
    });

    this.grid.events.on('footerCellMouseOver', (column, e) => {
      const infoFooterCellMouseOver = {column, event: e};
      this.logEvent(JSON.stringify(infoFooterCellMouseOver), 'footerCellMouseOver');
    });

    this.grid.events.on('headerCellMouseDown', (column, e) => {
      const infoHeaderCellMouseDown = {column, event: e};
      this.logEvent(JSON.stringify(infoHeaderCellMouseDown), 'headerCellMouseDown');
    });

    this.grid.events.on('footerCellMouseDown', (column, e) => {
      const infoFooterCellMouseDown = {column, event: e};
      this.logEvent(JSON.stringify(infoFooterCellMouseDown), 'footerCellMouseDown');
    });

    this.grid.events.on('headerCellDblClick', (column, e) => {
      const infoHeaderCellDblClick = {column, event: e};
      this.logEvent(JSON.stringify(infoHeaderCellDblClick), 'headerCellDblClick');
    });

    this.grid.events.on('footerCellDblClick', (column, e) => {
      const infoFooterCellDblClick = {column, event: e};
      this.logEvent(JSON.stringify(infoFooterCellDblClick), 'footerCellDblClick');
    });

    this.grid.events.on('headerCellRightClick', (column, e) => {
      const infoHeaderCellRightClick = {column, event: e};
      this.logEvent(JSON.stringify(infoHeaderCellRightClick), 'headerCellRightClick');
    });

    this.grid.events.on('footerCellRightClick', (column, e) => {
      const infoFooterCellRightClick = {column, event: e};
      this.logEvent(JSON.stringify(infoFooterCellRightClick), 'footerCellRightClick');
    });

    this.grid.events.on('beforeEditStart', (row, col, editorType) => {
      const infoBeforeEditStart = {row, col, editorType};
      this.logEvent(JSON.stringify(infoBeforeEditStart), 'beforeEditStart');
    });

    this.grid.events.on('afterEditStart', (row, col, editorType) => {
      const infoAfterEditStart = {row, col, editorType};
      this.logEvent(JSON.stringify(infoAfterEditStart), 'afterEditStart');
    });

    this.grid.events.on('beforeEditEnd', (value, row, column) => {
      const infoBeforeEditEnd = {value, row, column};
      this.logEvent(JSON.stringify(infoBeforeEditEnd), 'beforeEditEnd');
    });

    this.grid.events.on('afterEditEnd', (value, row, column) => {
      const infoAfterEditEnd = {value, row, column};
      this.logEvent(JSON.stringify(infoAfterEditEnd), 'afterEditEnd');
    });

    this.grid.events.on('beforeResizeStart', (column, e) => {
      const infoBeforeResizeStart = {column, event: e};
      this.logEvent(JSON.stringify(infoBeforeResizeStart), 'beforeResizeStart');
    });

    this.grid.events.on('resize', (column, e) => {
      const infoResize = {column, event: e};
      this.logEvent(JSON.stringify(infoResize), 'resize');
    });

    this.grid.events.on('afterResizeEnd', (column, e) => {
      const infoAfterResizeEnd = {column, event: e};
      this.logEvent(JSON.stringify(infoAfterResizeEnd), 'afterResizeEnd');
    });

    this.grid.events.on('beforeKeyDown', (e) => this.logEvent(JSON.stringify(e), 'beforeKeyDown'));
    this.grid.events.on('afterKeyDown', (e) => this.logEvent(JSON.stringify(e), 'afterKeyDown'));
  }

  ngOnDestroy() {
    if (this.grid) {
      this.grid.destructor();
    }
  }
}
