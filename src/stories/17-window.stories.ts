import {WindowComponent} from '../app/window/window.component';
import {WindowEventComponent} from '../app/window/window-event.component';
import {WindowCDNComponent} from '../app/window/window-cdn.component';
import {WindowConfiguratedComponent} from '../app/window/window-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Window',
  component: WindowComponent,
  decorators: [
    moduleMetadata({
      declarations: [WindowComponent, WindowConfiguratedComponent, WindowCDNComponent, WindowEventComponent],
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

export const Configurated = () => ({
  component: WindowConfiguratedComponent,
  props: {
    options: {
      width: 440,
      height: 520,
      title: 'Window',
      html: `<p>Here is a neat and flexible JavaScript window system with a fast and simple initialization.</p><p>Inspect all the DHTMLX window samples to discover each and every feature.</p><img style='display: block; width: 200px; height: 200px; margin-top: 20px; margin-left: auto; margin-right: auto' src='https://dhtmlx.github.io/react-widgets/static/developer.svg'>`,
      closable: true,
      modal: true
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/window/window-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-window-configurated [options]="options"></app-window-configurated>
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
     <div>
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
