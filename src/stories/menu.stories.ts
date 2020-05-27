import { MenuComponent } from '../app/menu/menu.component';
import { MenuEventComponent } from '../app/menu/menu-event.component';
import { MenuCDNComponent } from '../app/menu/menu-cdn.component';
import { MenuConfiguratedComponent } from '../app/menu/menu-configurated.component';
import { MenuDataComponent } from '../app/menu/menu-data.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [MenuComponent, MenuCDNComponent, MenuDataComponent, MenuConfiguratedComponent, MenuEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: MenuComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-menu></app-menu>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: MenuConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
    }
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-menu-configurated [options]="options"></app-menu-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: MenuDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-menu-data></app-menu-data>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: MenuCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-menu-cdn></app-menu-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: MenuEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-menu-event></app-menu-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});



