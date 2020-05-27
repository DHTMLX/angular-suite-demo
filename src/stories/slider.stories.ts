import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../app/slider/slider.component';
import { SliderConfiguraetedComponent } from '../app/slider/slider-configurated.component';
import { SliderCDNComponent } from '../app/slider/slider-cdn.component';
import { SliderEventsComponent } from '../app/slider/slider-events.component';

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
  template: `
    <section class="dhx-container">
      <h3>Basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-slider></app-slider>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Configurated = () => ({
  component: SliderConfiguraetedComponent,
  props: {
    options: {
      min: 0,
      max: 100,
      step: 1,
      tooltip: true,
      tick: 1,
      majorTick: 10,
      tickTemplate: (v) => v,
    }
  },
  template: `
    <section class="dhx-container">
      <h3>Pre-configured component</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider-configurated.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-slider-configurated [options]="options"></app-slider-configurated>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const CDN = () => ({
  component: SliderCDNComponent,
  template: `
    <section class="dhx-container">
      <h3>CDN basic initialization</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider-cdn.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-slider-cdn></app-slider-cdn>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});

export const Events = () => ({
  component: SliderEventsComponent,
  template: `
    <section class="dhx-container">
      <h3>Component Events</h3>
      <a
        class="source-link"
        href="https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/slider/slider-events.component.ts"
        target="_blank"
      >
        Source code
      </a>
      <app-slider-events></app-slider-events>
    </section>
  `,
  styleUrls: ['./styles/stories.css'],
});
