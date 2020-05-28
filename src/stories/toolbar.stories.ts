import { ToolbarComponent } from '../app/toolbar/toolbar.component';
import { ToolbarConfiguratedComponent } from '../app/toolbar/toolbar-configurated.component';
import { ToolbarDataComponent } from '../app/toolbar/toolbar-data.component';
import { ToolbarCDNComponent } from '../app/toolbar/toolbar-cdn.component';
import { ToolbarEventsComponent } from '../app/toolbar/toolbar-events.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [ToolbarComponent, ToolbarConfiguratedComponent, ToolbarDataComponent, ToolbarCDNComponent, ToolbarEventsComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ToolbarComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/toolbar/toolbar.component.ts"
        target="_blank"
      >
        Source code
      </a>
    <app-toolbar></app-toolbar>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: ToolbarConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      navigationType: 'pointer',
    }
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/toolbar/toolbar-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-toolbar-configurated [options]="options"></app-toolbar-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: ToolbarDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/toolbar/toolbar-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-toolbar-data></app-toolbar-data>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: ToolbarCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/toolbar/toolbar-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-toolbar-cdn></app-toolbar-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],

});

export const Events = () => ({
  component: ToolbarEventsComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/toolbar/toolbar-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-toolbar-event></app-toolbar-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
