import { TreeComponent } from "../app/tree/tree.component";
import { TreeEventComponent } from "../app/tree/tree-event.component";
import { TreeCDNComponent } from "../app/tree/tree-cdn.component";
import { TreeDataComponent } from "../app/tree/tree-data.component";
import { TreeConfiguratedComponent } from "../app/tree/tree-configurated.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Tree",
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
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-tree></app-tree>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: TreeConfiguratedComponent,
  props: {
    options: {
      keyNavigation: true,
      checkbox: true,
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-tree-configurated [options]="options"></app-tree-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Data = () => ({
  component: TreeDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-data.component.ts"
        target="_blank"
      >
         Source code
      </a>
      <app-tree-data></app-tree-data>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: TreeCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-tree-cdn></app-tree-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Events = () => ({
  component: TreeEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/tree/tree-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-tree-event></app-tree-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
