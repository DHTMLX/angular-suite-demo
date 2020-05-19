import {CalendarCDNComponent} from '../app/calendar/calendar-cdn.component';
import {CalendarEventComponent} from '../app/calendar/calender-event.component';
import {CalendarComponent} from '../app/calendar/calendar.component';
import {CalendarConfiguratedComponent} from '../app/calendar/calendar-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

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
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-calendar></app-calendar>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: CalendarConfiguratedComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-calendar-configurated></app-calendar-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: CalendarCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-calendar-cdn></app-calendar-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: CalendarEventComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/calendar/calendar-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-calendar-event></app-calendar-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
