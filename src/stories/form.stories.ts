import { FormComponent } from "../app/form/form.component";
import { FormEventComponent } from "../app/form/form-event.component";
import { FormCDNComponent } from "../app/form/form-cdn.component";
import { FormConfiguratedComponent } from "../app/form/form-configurated.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Form",
  component: FormComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormComponent, FormCDNComponent, FormConfiguratedComponent, FormEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: FormComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-form></app-form>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: FormConfiguratedComponent,
  props: {
    options: {
      css: "dhx_widget--bordered dhx_widget--bg_white",
      padding: 20,
      title: "DHX Form",
      width: 400,
      rows: [
        {
          type: "datepicker",
          label: "Date",
          required: true,
          name: "date",
        },
        {
          type: "timepicker",
          controls: "true",
          label: "Time",
          required: true,
          name: "time",
        },
        {
          type: "colorpicker",
          label: "Color",
          required: true,
          name: "color",
        },
        {
          type: "simpleVault",
          required: true,
          label: "Files",
          name: "simplevault",
        },
        {
          type: "button",
          text: "Send",
          size: "medium",
          view: "flat",
          submit: true,
          color: "primary",
        },
      ],
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-form-configurated [options]="options"></app-form-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: FormCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-form-cdn></app-form-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Events = () => ({
  component: FormEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/form/form-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-form-event></app-form-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
