import { ListComponent } from '../app/list/list.component';
import { ListEventComponent } from '../app/list/list-event.component';
import { ListCDNComponent } from '../app/list/list-cdn.component';
import { ListConfiguratedComponent } from '../app/list/list-configured.component';
import { ListDataComponent } from '../app/list/list-data.component';


export default {
    title: 'List',
    component: ListComponent,
};

export const Base = () => ({
    component: ListComponent,
});

export const Configurated = () => ({
    component: ListConfiguratedComponent,
});

export const Data = () => ({
    component: ListDataComponent,
});

export const CDN = () => ({
    component: ListCDNComponent,
});

export const Events = () => ({
    component: ListEventComponent,
});




