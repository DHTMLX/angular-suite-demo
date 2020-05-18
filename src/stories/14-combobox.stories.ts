import {ComboboxComponent} from '../app/combobox/combobox.component';
import {ComboboxEventComponent} from '../app/combobox/combobox-event.component';
import {ComboboxCDNComponent} from '../app/combobox/combobox-cdn.component';
import {ComboboxConfiguredComponent} from '../app/combobox/combobox-configured.component';
import {ComboboxDataComponent} from '../app/combobox/combobox-data.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';


export default {
  title: 'Combobox',
  component: ComboboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [ComboboxComponent, ComboboxCDNComponent, ComboboxDataComponent, ComboboxConfiguredComponent, ComboboxEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ComboboxComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-combobox></app-combobox>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: ComboboxConfiguredComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-combobox></app-combobox>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: ComboboxDataComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-data.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-combobox-data></app-combobox-data>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: ComboboxCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-combobox-cdn></app-combobox-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: ComboboxEventComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-combobox-event></app-combobox-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
