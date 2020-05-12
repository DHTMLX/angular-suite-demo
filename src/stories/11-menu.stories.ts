import { MenuComponent } from '../app/menu/menu.component';
import { MenuEventComponent } from '../app/menu/menu-event.component';


export default {
    title: 'Menu',
    component: MenuComponent,
};

export const Base = () => ({
    component: MenuComponent,
});

export const Events = () => ({
    component: MenuEventComponent,
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

