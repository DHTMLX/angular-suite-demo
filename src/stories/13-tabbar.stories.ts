import { TabbarComponent } from '../app/tabbar/tabbar.component';
import { TabbarEventComponent } from "../app/tabbar/tabbar-event.component";



export default {
    title: 'Tabbar',
    component: TabbarComponent,
};

export const Base = () => ({
    component: TabbarComponent,
});

export const Events = () => ({
    component: TabbarEventComponent,
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


