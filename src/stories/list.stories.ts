import { ListComponent } from "../app/list/list.component";
import { ListEventComponent } from "../app/list/list-event.component";
import { ListCDNComponent } from "../app/list/list-cdn.component";
import { ListConfiguratedComponent } from "../app/list/list-configurated.component";
import { ListDataComponent } from "../app/list/list-data.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "List",
  component: ListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ListComponent, ListCDNComponent, ListDataComponent, ListConfiguratedComponent, ListEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ListComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-list></app-list>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: ListConfiguratedComponent,
  props: {
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
      height: 400,
      itemHeight: 70,
      keyNavigation: true,
      dragMode: "both",
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-list-configurated [options]="options"></app-list-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Data = () => ({
  component: ListDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-list-data></app-list-data>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: ListCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-list-cdn></app-list-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Events = () => ({
  component: ListEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/list/list-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-list-event></app-list-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
