import { TabbarComponent } from '../app/tabbar/tabbar.component';
import { TabbarEventComponent } from "../app/tabbar/tabbar-event.component";
import { TabbarCDNComponent } from '../app/tabbar/tabbar-cdn.component';
import { TabbarConfiguredComponent } from '../app/tabbar/tabbar-configured.component';

export default {
    title: 'Tabbar',
    component: TabbarComponent,
};

export const Base = () => ({
    component: TabbarComponent,
});

export const Configurated = () => ({
    component: TabbarConfiguredComponent,
});

export const CDN = () => ({
    component: TabbarCDNComponent,
});

export const Events = () => ({
    component: TabbarEventComponent,
});

// // export const Data = () => ({
// //     component: RibbonDataComponent,
// // });


