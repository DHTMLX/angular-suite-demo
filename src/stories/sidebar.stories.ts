import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { SidebarConfiguratedComponent } from '../app/sidebar/sidebar-configurated.component';
import { SidebarDataComponent } from '../app/sidebar/sidebar-data.component';
import { SidebarCDNComponent } from '../app/sidebar/sidebar-cdn.component';
import { SidebarEventsComponent } from '../app/sidebar/sidebar-events.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

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
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-sidebar></app-sidebar>
    </section>
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
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-sidebar-configurated [options]="options"></app-sidebar-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: SidebarDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-sidebar-data></app-sidebar-data>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: SidebarCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-sidebar-cdn></app-sidebar-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: SidebarEventsComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/sidebar/sidebar-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-sidebar-event></app-sidebar-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
