import { ListComponent } from '../app/list/list.component';
import { ListEventComponent } from '../app/list/list-event.component';


export default {
    title: 'List',
    component: ListComponent,
};

export const Base = () => ({
    component: ListComponent,
});

export const Events = () => ({
  component: ListEventComponent,
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

