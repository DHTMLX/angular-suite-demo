import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../app/slider/slider.component';
import { SliderConfiguraetedComponent } from '../app/slider/slider-configurated.component';
import { SliderCDNComponent } from '../app/slider/slider-cdn.component';
import { SliderEventsComponent } from '../app/slider/slider-events.component';


import './styles/stories.css';

export default {
    title: 'Slider',
    component: SliderComponent,
    decorators: [
        moduleMetadata({
          declarations: [SliderComponent, SliderConfiguraetedComponent, SliderCDNComponent, SliderEventsComponent],
          imports: [CommonModule],
        }),
      ],
};

export const Base = () => ({
    component: SliderComponent,
    template:`
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-slider></app-slider>
    </div>
  `,
  styleUrls: [ './styles/stories.css' ],
});

export const Configurated = () => ({
    component: SliderConfiguraetedComponent,
    template:`
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider-configurated.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-slider-configurated></app-slider-configurated>
    </div>
  `,
  styleUrls: [ './styles/stories.css' ],
});

export const CDN = () => ({
    component: SliderCDNComponent,
    template:`
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider-cdn.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-slider-cdn></app-slider-cdn>
    </div>
  `,
  styleUrls: [ './styles/stories.css' ],
});

export const Events = () => ({
    component: SliderEventsComponent,
    template:`
    <div style="padding: 3rem">
     <div>
        <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider-events.component.ts" 
        target="_blank"
        >
            Source code
        </a>
     </div>
      <app-slider-events></app-slider-events>
    </div>
  `,
  styleUrls: [ './styles/stories.css' ],
});
