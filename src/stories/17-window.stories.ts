import {WindowComponent} from '../app/window/window.component';
import {WindowEventComponent} from '../app/window/window-event.component';
import {WindowCDNComponent} from '../app/window/window-cdn.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Window',
  component: WindowComponent,
  decorators: [
    moduleMetadata({
      declarations: [WindowComponent, WindowCDNComponent, WindowEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: WindowComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/window/window.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-window></app-window>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: WindowCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/window/window-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-window-cdn></app-window-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: WindowEventComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/window/window-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-window-event></app-window-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
