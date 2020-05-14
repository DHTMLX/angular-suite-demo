import { ChartComponent } from '../app/chart/chart.component';
import { ChartEventComponent } from '../app/chart/chart-event.component';
import { ChartCDNComponent } from '../app/chart/chart-cdn.component';

export default {
    title: 'Chart',
    component: ChartComponent,
};

export const Base = () => ({
    component: ChartComponent,
});

export const CDN = () => ({
    component: ChartCDNComponent,
});

export const Events = () => ({
    component: ChartEventComponent,
});
