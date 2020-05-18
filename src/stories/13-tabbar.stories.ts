import {TabbarComponent} from '../app/tabbar/tabbar.component';
import {TabbarEventComponent} from '../app/tabbar/tabbar-event.component';
import {TabbarCDNComponent} from '../app/tabbar/tabbar-cdn.component';
import {TabbarConfiguratedComponent} from '../app/tabbar/tabbar-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Tabbar',
  component: TabbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [TabbarComponent, TabbarCDNComponent, TabbarConfiguratedComponent, TabbarEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: TabbarComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tabbar/tabbar.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tabbar></app-tabbar>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: TabbarConfiguratedComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tabbar/tabbar-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tabbar-configured></app-tabbar-configured>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: TabbarCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tabbar/tabbar-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tabbar-cdn></app-tabbar-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: TabbarEventComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tabbar/tabbar-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tabbar-event></app-tabbar-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

