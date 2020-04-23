import { TimePickerComponent } from '../app/timepicker/timepicker.component';
import { TimePickerConfiguratedComponent } from '../app/timepicker/timepicker-configurated.component';

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

// export const CDN = () => ({
//     component: CalendarCDNComponent,
// });

// export const Events = () => ({
//     component: CalendarEventComponent,
// });
