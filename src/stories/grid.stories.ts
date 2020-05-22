import {GridComponent} from '../app/grid/grid.component';
import {GridEventComponent} from '../app/grid/grid-event.component';
import {GridCDNComponent} from '../app/grid/grid-cdn.component';
import {GridDataComponent} from '../app/grid/grid-data.component';
import {GridConfiguratedComponent} from '../app/grid/grid-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      declarations: [GridComponent, GridConfiguratedComponent, GridDataComponent, GridCDNComponent, GridEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: GridComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-grid></app-grid>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: GridConfiguratedComponent,
  props: {
    options: {
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
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-configurated.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-grid-configurated [options]="options"></app-grid-configurated>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: GridDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-data.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-grid-data></app-grid-data>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: GridCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-cdn.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-grid-cdn></app-grid-cdn>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: GridEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-event.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-grid-event></app-grid-event>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

