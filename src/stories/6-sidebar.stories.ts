import {SidebarComponent} from '../app/sidebar/sidebar.component';
import {SidebarConfiguratedComponent} from '../app/sidebar/sidebar-configurated';
import {SidebarDataComponent} from '../app/sidebar/sidebar-data.component';
import {SidebarCDNComponent} from '../app/sidebar/sidebar-cdn.component';
import {SidebarEventsComponent} from '../app/sidebar/sidebar-events.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Sidebar',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      declarations: [SidebarComponent, SidebarConfiguratedComponent, SidebarDataComponent, SidebarCDNComponent, SidebarEventsComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: SidebarComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-sidebar></app-sidebar>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: SidebarConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      width: 200,
      minWidth: 120,
      collapsed: false,
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-configurated.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-sidebar-configurated [options]="options"></app-sidebar-configurated>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: SidebarDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-data.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-sidebar-data></app-sidebar-data>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: SidebarCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-cdn.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-sidebar-cdn></app-sidebar-cdn>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: SidebarEventsComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-event.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-sidebar-event></app-sidebar-event>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
