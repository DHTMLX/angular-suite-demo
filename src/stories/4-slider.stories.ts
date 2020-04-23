

import { SliderComponent } from '../app/slider/slider.component';
import { SliderConfiguraetedComponent } from '../app/slider/slider-configurated.component';

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

// export const CDN = () => ({
//     component: TimePickerCDNComponent,
// });

// export const Events = () => ({
//     component: TimePickerEventsComponent,
// });
