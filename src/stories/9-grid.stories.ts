import { GridComponent } from '../app/grid/grid.component';
import { GridEventComponent } from '../app/grid/grid-event.component';
import { GridCDNComponent } from '../app/grid/grid-cdn.component';
import { GridDataComponent } from '../app/grid/grid-data.component';

export default {
    title: 'Grid',
    component: GridComponent,
};

export const Base = () => ({
    component: GridComponent,
});

export const Data = () => ({
    component: GridDataComponent,
});

export const CDN = () => ({
    component: GridCDNComponent,
});

export const Events = () => ({
    component: GridEventComponent,
});

// export const Configurated = () => ({
//     component: DataviewConfiguratedComponent,
// });
