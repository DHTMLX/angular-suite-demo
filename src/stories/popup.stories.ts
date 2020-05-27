import { PopupComponent } from '../app/popup/popup.component';
import { PopupEventComponent } from '../app/popup/popup-event.component';
import { PopupCDNComponent } from '../app/popup/popup-cdn.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Popup',
  component: PopupComponent,
  decorators: [
    moduleMetadata({
      declarations: [PopupComponent, PopupCDNComponent, PopupEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: PopupComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/popup/popup.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-popup></app-popup>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: PopupCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/popup/popup-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-popup-cdn></app-popup-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: PopupEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/popup/popup-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-popup-event></app-popup-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
