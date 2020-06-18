import { ColorPickerComponent } from "../app/colorpicker/colorpicker.component";
import { ColorPickerCDNComponent } from "../app/colorpicker/colorpicker-cdn.component";
import { ColorpickerEventComponent } from "../app/colorpicker/colorpicker-event.component";
import { ColorpickerComponentConfigurated } from "../app/colorpicker/colorpicker-configurated.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Color Picker",
  component: ColorPickerCDNComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorPickerComponent, ColorPickerCDNComponent, ColorpickerComponentConfigurated, ColorpickerEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: ColorPickerComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-colorpicker></app-colorpicker>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: ColorpickerComponentConfigurated,
  props: {
    options: {
      css: "dhx_widget--bordered",
      paletteOnly: true,
      grayShades: true,
      pickerOnly: true,
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-colorpicker-configurated [options]="options"></app-colorpicker-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: ColorPickerCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-colorpicker-cdn></app-colorpicker-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Event = () => ({
  component: ColorpickerEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-colorpicker-event></app-colorpicker-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
