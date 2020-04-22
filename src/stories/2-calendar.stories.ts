import { CalendarCDNComponent } from '../app/calendar/calendar-cdn.component';
import { CalendarEventComponent } from '../app/calendar/calender-event.component';
import { CalendarComponent } from '../app/calendar/calendar.component';
import { CalendarComponent as CalendarComponentConfigurated } from '../app/calendar/calendar-configured.component';

export default {
    title: 'Calendar',
    component: CalendarCDNComponent,
};

export const Base = () => ({
    component: CalendarComponent,
});

export const Configurated = () => ({
    component: CalendarComponentConfigurated,
});

export const CDN = () => ({
    component: CalendarCDNComponent,
});

export const Events = () => ({
    component: CalendarEventComponent,
});
