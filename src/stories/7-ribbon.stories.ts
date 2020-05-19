import {RibbonComponent} from '../app/ribbon/ribbon.component';
import {RibbonConfiguratedComponent} from '../app/ribbon/ribbon-configurated.component';
import {RibbonDataComponent} from '../app/ribbon/ribbon-data.component';
import {RibbonCDNComponent} from '../app/ribbon/ribbon-cdn.component';
import {RibbonEventsComponent} from '../app/ribbon/ribbon-events.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Ribbon',
  component: RibbonComponent,
  decorators: [
    moduleMetadata({
      declarations: [RibbonComponent, RibbonConfiguratedComponent, RibbonDataComponent, RibbonCDNComponent, RibbonEventsComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: RibbonComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-ribbon></app-ribbon>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: RibbonConfiguratedComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-configurated.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-ribbon-configurated></app-ribbon-configurated>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: RibbonDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-data.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-ribbon-data></app-ribbon-data>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: RibbonCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-cdn.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-ribbon-cdn></app-ribbon-cdn>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: RibbonEventsComponent,
    template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-event.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-ribbon-event></app-ribbon-event>
    </div>
  `,
    styleUrls: ['./styles/stories.css'],
});
