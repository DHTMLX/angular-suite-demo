import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { SidebarConfiguratedComponent } from '../app/sidebar/sidebar-configurated';
import { SidebarDataComponent } from '../app/sidebar/sidebar-data.component';
// import { ToolbarCDNComponent } from '../app/toolbar/toolbar-cdn.component';
// import { ToolbarEventsComponent } from '../app/toolbar/toolbar-events.component';

export default {
    title: 'Sidebar',
    component: SidebarComponent,
};

export const Base = () => ({
    component: SidebarComponent,
});

export const Configurated = () => ({
    component: SidebarConfiguratedComponent,
});

export const Data = () => ({
    component: SidebarDataComponent,
});

// export const CDN = () => ({
//     component: ToolbarCDNComponent,
// });

// export const Events = () => ({
//     component: ToolbarEventsComponent,
// });
