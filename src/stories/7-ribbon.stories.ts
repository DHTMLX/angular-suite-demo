import { RibbonComponent } from '../app/ribbon/ribbon.component';
import { RibbonConfiguratedComponent } from '../app/ribbon/ribbon-configurated.component';
import { RibbonDataComponent } from '../app/ribbon/ribbon-data.component';
// import { SidebarConfiguratedComponent } from '../app/sidebar/sidebar-configurated';
// import { SidebarDataComponent } from '../app/sidebar/sidebar-data.component';
// import { SidebarCDNComponent } from '../app/sidebar/sidebar-cdn.component';
// import { SidebarEventsComponent } from '../app/sidebar/sidebar-events.component';

export default {
    title: 'Ribbon',
    component: RibbonComponent,
};

export const Base = () => ({
    component: RibbonComponent,
});

export const Configurated = () => ({
    component: RibbonConfiguratedComponent,
});

export const Data = () => ({
    component: RibbonDataComponent,
});

// export const CDN = () => ({
//     component: SidebarCDNComponent,
// });

// export const Events = () => ({
//     component: SidebarEventsComponent,
// });
