import { SliderComponent } from '../app/slider/slider.component';
import { SliderConfiguraetedComponent } from '../app/slider/slider-configurated.component';
import { SliderCDNComponent } from '../app/slider/slider-cdn.component';
import { SliderEventsComponent } from '../app/slider/slider-events.component';

export default {
    title: 'Slider',
    component: SliderComponent,
};

export const Base = () => ({
    component: SliderComponent,
});

export const Configurated = () => ({
    component: SliderConfiguraetedComponent,
});

export const CDN = () => ({
    component: SliderCDNComponent,
});

export const Events = () => ({
    component: SliderEventsComponent,
});
