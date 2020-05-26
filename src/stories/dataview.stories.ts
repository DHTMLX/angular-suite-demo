import { DataviewComponent } from '../app/dataview/dataview.component';
import { DataviewConfiguratedComponent } from '../app/dataview/dataview-configurated.component';
import { DataviewCDNComponent } from '../app/dataview/dataview-cdn.component';
import { DataviewEventsComponent } from '../app/dataview/dataview-events.component';
import { DataviewDataComponent } from '../app/dataview/dataview-data.component';
import { moduleMetadata } from '@storybook/angular';

import { CommonModule } from '@angular/common';

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
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-dataview></app-dataview>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: DataviewConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      itemsInRow: 4,
      gap: 10,
      keyNavigation: true,
      multiselection: true,
      dragMode: "both",
      template: (item) => `
        <div class="template template__container">
          <img
            class="template__image"
            src="https://dhtmlx.github.io/react-widgets/static/${item.img}"
          />
          <h2 class="template__title">${item.title}</h2>
          <p class="template__description">${item.short}</з>
        </div>
      `,
    }
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-dataview-configurated [options]="options"></app-dataview-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: DataviewDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-dataview-data></app-dataview-data>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: DataviewCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-dataview-cdn></app-dataview-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: DataviewEventsComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/dataview/dataview-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-dataview-event></app-dataview-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
