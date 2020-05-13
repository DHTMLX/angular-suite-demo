import { GridComponent } from '../app/grid/grid.component';
import { GridEventComponent } from "../app/grid/grid-event.component";

export default {
    title: 'Grid',
    component: GridComponent,
};

export const Base = () => ({
    component: GridComponent,
});

export const Events = () => ({
    component: GridEventComponent,
});

// export const Configurated = () => ({
//     component: DataviewConfiguratedComponent,
// });

// // export const Data = () => ({
// //     component: RibbonDataComponent,
// // });

// export const CDN = () => ({
//     component: DataviewCDNComponent,
// });
