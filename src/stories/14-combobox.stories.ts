import { ComboboxComponent } from '../app/combobox/combobox.component';
import { ComboboxEventComponent } from '../app/combobox/combobox-event.component'


export default {
    title: 'Combobox',
    component: ComboboxComponent,
};

export const Base = () => ({
    component: ComboboxComponent,
});

export const Events = () => ({
    component: ComboboxEventComponent,
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

