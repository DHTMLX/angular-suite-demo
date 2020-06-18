import { TimePickerComponent } from "../app/timepicker/timepicker.component";
import { TimePickerConfiguratedComponent } from "../app/timepicker/timepicker-configurated.component";
import { TimePickerCDNComponent } from "../app/timepicker/timepicker-cdn.component";
import { TimePickerEventsComponent } from "../app/timepicker/timepicker-event.component";
import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";

export default {
  title: "Time Picker",
  component: TimePickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [TimePickerComponent, TimePickerConfiguratedComponent, TimePickerCDNComponent, TimePickerEventsComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: TimePickerComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-timepicker></app-timepicker>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Configurated = () => ({
  component: TimePickerConfiguratedComponent,
  props: {
    options: {
      css: "dhx_widget--bordered",
      controls: true,
      timeFormat: 12,
    },
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-timepicker-configurated [options]="options"></app-timepicker-configurated>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const CDN = () => ({
  component: TimePickerCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-timepicker-cdn></app-timepicker-cdn>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});

export const Events = () => ({
  component: TimePickerEventsComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-timepicker-event></app-timepicker-event>
    </section>
  `,
  styleUrls: ["./styles/stories.css"],
});
