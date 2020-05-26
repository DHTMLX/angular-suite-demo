import { ComboboxComponent } from '../app/combobox/combobox.component';
import { ComboboxEventComponent } from '../app/combobox/combobox-event.component';
import { ComboboxCDNComponent } from '../app/combobox/combobox-cdn.component';
import { ComboboxConfiguratedComponent } from '../app/combobox/combobox-configurated.component';
import { ComboboxDataComponent } from '../app/combobox/combobox-data.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';


export default {
  title: 'Combobox',
  component: ComboboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [ComboboxComponent, ComboboxCDNComponent, ComboboxDataComponent, ComboboxConfiguratedComponent, ComboboxEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ComboboxComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-combobox></app-combobox>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: ComboboxConfiguratedComponent,
  props: {
    options: {
      multiselection: true,
      label: 'DHX-angular combobox',
      labelPosition: 'top',
      labelWidth: 150,
      selectAllButton: true,
      required: true,
      itemsCount: true,
      placeholder: 'Click to choose',
    }
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-combobox-configurated [options]="options"></app-combobox-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: ComboboxDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-combobox-data></app-combobox-data>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: ComboboxCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-combobox-cdn></app-combobox-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: ComboboxEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/combobox/combobox-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-combobox-event></app-combobox-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
