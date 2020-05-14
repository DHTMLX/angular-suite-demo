import { ComboboxComponent } from '../app/combobox/combobox.component';
import { ComboboxEventComponent } from '../app/combobox/combobox-event.component';
import { ComboboxCDNComponent } from '../app/combobox/combobox-cdn.component';
import { ComboboxConfiguredComponent } from '../app/combobox/combobox-configured.component';
import { ComboboxDataComponent } from '../app/combobox/combobox-data.component';


export default {
    title: 'Combobox',
    component: ComboboxComponent,
};

export const Base = () => ({
    component: ComboboxComponent,
});

export const Configurated = () => ({
    component: ComboboxConfiguredComponent,
});

export const Data = () => ({
    component: ComboboxDataComponent,
});

export const CDN = () => ({
    component: ComboboxCDNComponent,
});

export const Events = () => ({
    component: ComboboxEventComponent,
});
