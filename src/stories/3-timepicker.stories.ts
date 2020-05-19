import {TimePickerComponent} from '../app/timepicker/timepicker.component';
import {TimePickerConfiguratedComponent} from '../app/timepicker/timepicker-configurated.component';
import {TimePickerCDNComponent} from '../app/timepicker/timepicker-cdn.components';
import {TimePickerEventsComponent} from '../app/timepicker/timepicker-event.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';

export default {
  title: 'Time Picker',
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
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-timepicker></app-timepicker>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: TimePickerConfiguratedComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-timepicker-configurated></app-timepicker-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: TimePickerCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-timepicker-cdn></app-timepicker-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: TimePickerEventsComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/timepicker/timepicker-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-timepicker-event></app-timepicker-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
