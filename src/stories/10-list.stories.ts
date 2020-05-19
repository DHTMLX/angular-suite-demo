import {ListComponent} from '../app/list/list.component';
import {ListEventComponent} from '../app/list/list-event.component';
import {ListCDNComponent} from '../app/list/list-cdn.component';
import {ListConfiguratedComponent} from '../app/list/list-configurated.component';
import {ListDataComponent} from '../app/list/list-data.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';


export default {
  title: 'List',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListComponent, ListCDNComponent, ListDataComponent, ListConfiguratedComponent, ListEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ListComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-list></app-list>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: ListConfiguratedComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-list-configurated></app-list-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: ListDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-data.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-list-data></app-list-data>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: ListCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-list-cdn></app-list-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: ListEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-list-event></app-list-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});




