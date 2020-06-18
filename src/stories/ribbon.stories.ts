import { RibbonComponent } from "../app/ribbon/ribbon.component";
import { RibbonConfiguratedComponent } from "../app/ribbon/ribbon-configurated.component";
import { RibbonDataComponent } from "../app/ribbon/ribbon-data.component";
import { RibbonCDNComponent } from "../app/ribbon/ribbon-cdn.component";
import { RibbonEventsComponent } from "../app/ribbon/ribbon-events.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Ribbon",
  component: RibbonComponent,
  decorators: [
    moduleMetadata({
      declarations: [RibbonComponent, RibbonConfiguratedComponent, RibbonDataComponent, RibbonCDNComponent, RibbonEventsComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: RibbonComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-ribbon></app-ribbon>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: RibbonConfiguratedComponent,
  props: {
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-ribbon-configurated [options]="options"></app-ribbon-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Data = () => ({
  component: RibbonDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-ribbon-data></app-ribbon-data>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: RibbonCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-ribbon-cdn></app-ribbon-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Events = () => ({
  component: RibbonEventsComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/ribbon/ribbon-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-ribbon-event></app-ribbon-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
