import { CalendarCDNComponent } from '../app/calendar/calendar-cdn.component';
import { CalendarEventComponent } from '../app/calendar/calender-event.component';
import { CalendarComponent } from '../app/calendar/calendar.component';
import { CalendarConfiguratedComponent } from '../app/calendar/calendar-configurated.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
  title: 'Calendar',
  component: CalendarCDNComponent,
  decorators: [
    moduleMetadata({
      declarations: [CalendarComponent, CalendarConfiguratedComponent, CalendarCDNComponent, CalendarEventComponent],
      imports: [CommonModule],
    }),
  ],
};

export const Base = () => ({
  component: CalendarComponent,
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar.component.ts"
        target="_blank"
      >
        Code example
      </a>
      <app-calendar></app-calendar>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: CalendarConfiguratedComponent,
  props: {
    options: {
      css: 'dhx_widget--bordered',
      value: new Date(),
      weekNumbers: true,
      timePicker: true,
      timeFormat: 12,
      thisMonthOnly: true,
    }
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-calendar-configurated [options]="options"></app-calendar-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: CalendarCDNComponent,
  template: `
    <section class="dhx-container">
    <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-calendar-cdn></app-calendar-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: CalendarEventComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar-event.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-calendar-event></app-calendar-event>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
