import { ChartComponent } from '../app/chart/chart.component';
import { ChartEventComponent } from "../app/chart/chart-event.component";

export default {
    title: 'Chart',
    component: ChartComponent,
};

export const Base = () => ({
    component: ChartComponent,
});

export const Events = () => ({
    component: ChartEventComponent,
});
