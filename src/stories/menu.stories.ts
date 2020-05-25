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
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-menu></app-menu>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: MenuConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered',
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-menu-configurated [options]="options"></app-menu-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: MenuDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-data.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-menu-data></app-menu-data>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: MenuCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-menu-cdn></app-menu-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: MenuEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/menu/menu-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-menu-event></app-menu-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});



