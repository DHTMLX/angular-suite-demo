import {TreeComponent} from '../app/tree/tree.component';
import {TreeEventComponent} from '../app/tree/tree-event.component';
import {TreeCDNComponent} from '../app/tree/tree-cdn.component';
import {TreeDataComponent} from '../app/tree/tree-data.component';
import {TreeConfiguratedComponent} from '../app/tree/tree-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Tree',
  component: TreeComponent,
  decorators: [
    moduleMetadata({
      declarations: [TreeComponent, TreeCDNComponent, TreeDataComponent, TreeConfiguratedComponent, TreeEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: TreeComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tree></app-tree>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: TreeConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered dhx_widget--bg_white',
      keyNavigation: true,
      checkbox: true,
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tree-configurated [options]="options"></app-tree-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Data = () => ({
  component: TreeDataComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-data.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tree-data></app-tree-data>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: TreeCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tree-cdn></app-tree-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: TreeEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-tree-event></app-tree-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
