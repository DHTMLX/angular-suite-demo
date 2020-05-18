import {ColorPickerComponent} from '../app/colorpicker/colorpicker.component';
import {ColorPickerCDNComponent} from '../app/colorpicker/colorpicker-cdn.component';
import {ColorpickerEventComponent} from '../app/colorpicker/colorpicker-event.component';
import {ColorpickerComponentConfigurated} from '../app/colorpicker/colorpicker-configurated.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';


export default {
  title: 'Color Picker',
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
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-colorpicker></app-colorpicker>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: ColorpickerComponentConfigurated,
  props: {
    options: {
      customColors: ['#1d2de7', '#ab31ff', '#a3fa76', '#eeeeee', 'red', 'gray'],
    }
  },
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker-configurated.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-colorpicker-configurated></app-colorpicker-configurated>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: ColorPickerCDNComponent,
  template: `
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker-cdn.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-colorpicker-cdn></app-colorpicker-cdn>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Event = () => ({
  component: ColorpickerEventComponent,
  template: `
    <div style="padding: 3rem">
     <div class="link-container">
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/colorpicker/colorpicker-event.component.ts"
        target="_blank"
        >
            Source code
        </a>
     </div>
     <div>
        <app-colorpicker-event></app-colorpicker-event>
     </div>
    </div>
  `,
  styleUrls: ['./styles/stories.css'],
});
