import { DataviewComponent } from '../app/dataview/dataview.component';
import { DataviewConfiguratedComponent } from '../app/dataview/dataview-configurated.component';
import { DataviewCDNComponent } from '../app/dataview/dataview-cdn.component';


export default {
    title: 'DataView',
    component: DataviewComponent,
};

export const Base = () => ({
    component: DataviewComponent,
});

export const Configurated = () => ({
    component: DataviewConfiguratedComponent,
});

// export const Data = () => ({
//     component: RibbonDataComponent,
// });

export const CDN = () => ({
    component: DataviewCDNComponent,
});

// export const Events = () => ({
//     component: RibbonEventsComponent,
// });
