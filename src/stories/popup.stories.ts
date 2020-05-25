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
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/popup/popup.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-popup></app-popup>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: PopupCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/popup/popup-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-popup-cdn></app-popup-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: PopupEventComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/popup/popup-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-popup-event></app-popup-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
