import {DataviewComponent} from '../app/dataview/dataview.component';
import {DataviewConfiguratedComponent} from '../app/dataview/dataview-configurated.component';
import {DataviewCDNComponent} from '../app/dataview/dataview-cdn.component';
import {DataviewEventsComponent} from '../app/dataview/dataview-events.component';
import {DataviewDataComponent} from '../app/dataview/dataview-data.component';
import {moduleMetadata} from '@storybook/angular';

import {CommonModule} from '@angular/common';

export default {
  title: 'DataView',
  component: DataviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [DataviewComponent, DataviewConfiguratedComponent, DataviewDataComponent, DataviewCDNComponent, DataviewEventsComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: DataviewComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-dataview></app-dataview>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: DataviewConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      itemsInRow: 6,
      gap: 20,
      keyNavigation: true,
      template: (item) => `
       <div class='item_wrap item-wrap--grid'>
        <img
            class='image'
            style="max-width: 120px"
            src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
        />
        <h2 class='title'>${item.title}</h2>
        <div>${item.short}</div>
       </div>`,
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-configurated.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-dataview-configurated [options]="options"></app-dataview-configurated>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: DataviewDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-data.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-dataview-data></app-dataview-data>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: DataviewCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-cdn.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-dataview-cdn></app-dataview-cdn>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: DataviewEventsComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-event.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-dataview-event></app-dataview-event>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
