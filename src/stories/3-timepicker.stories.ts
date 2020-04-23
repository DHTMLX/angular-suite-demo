import { TimePickerComponent } from '../app/timepicker/timepicker.component';
import { TimePickerConfiguratedComponent } from '../app/timepicker/timepicker-configurated.component';
import { TimePickerCDNComponent } from '../app/timepicker/timepicker-cdn.components';
import {TimePickerEventsComponent } from '../app/timepicker/timepicker-event.component';

export default {
    title: 'Time Picker',
    component: TimePickerComponent,
};

export const Base = () => ({
    component: TimePickerComponent,
});

export const Configurated = () => ({
    component: TimePickerConfiguratedComponent,
});

export const CDN = () => ({
    component: TimePickerCDNComponent,
});

export const Events = () => ({
    component: TimePickerEventsComponent,
});
