import { GridComponent } from "../app/grid/grid.component";
import { GridEventComponent } from "../app/grid/grid-event.component";
import { GridCDNComponent } from "../app/grid/grid-cdn.component";
import { GridDataComponent } from "../app/grid/grid-data.component";
import { GridConfiguratedComponent } from "../app/grid/grid-configurated.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Grid",
  component: GridComponent,
  decorators: [
    moduleMetadata({
      declarations: [GridComponent, GridConfiguratedComponent, GridDataComponent, GridCDNComponent, GridEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: GridComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-grid></app-grid>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: GridConfiguratedComponent,
  props: {
    options: {
      columns: [
        { id: "country", header: [{ text: "Country" }] },
        { id: "population", header: [{ text: "Population" }] },
        { id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        { id: "netChange", header: [{ text: "Net Change" }] },
        { id: "destiny", header: [{ text: "Density (P/Km²)" }] },
        { id: "area", header: [{ text: "Land Area (Km²)" }] },
        { id: "migrants", header: [{ text: "Migrants (net)" }] },
        { id: "fert", header: [{ text: "Fert. Rate" }] },
        { id: "age", header: [{ text: "Med. Age" }] },
        { id: "urban", header: [{ text: "Urban Pop" }] },
      ],
      rowHeight: 60,
      autoWidth: true,
      editable: true,
      multiselection: true,
      selection: "complex",
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-grid-configurated [options]="options"></app-grid-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Data = () => ({
  component: GridDataComponent,
  template: `
    <section class="dhx-container">
      <h3>Work with data</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-data.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-grid-data></app-grid-data>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: GridCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-grid-cdn></app-grid-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Events = () => ({
  component: GridEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/grid/grid-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-grid-event></app-grid-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
