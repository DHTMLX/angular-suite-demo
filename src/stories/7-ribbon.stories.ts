import { RibbonComponent } from '../app/ribbon/ribbon.component';
import { RibbonConfiguratedComponent } from '../app/ribbon/ribbon-configurated.component';
import { RibbonDataComponent } from '../app/ribbon/ribbon-data.component';
import { RibbonCDNComponent } from '../app/ribbon/ribbon-cdn.component';
import { RibbonEventsComponent } from '../app/ribbon/ribbon-events.component';

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

export const CDN = () => ({
    component: RibbonCDNComponent,
});

export const Events = () => ({
    component: RibbonEventsComponent,
});
