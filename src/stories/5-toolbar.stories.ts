import { ToolbarComponent } from '../app/toolbar/toolbar.component';
import { ToolbarConfiguratedComponent } from '../app/toolbar/toolbar-configurated.component';
import { ToolbarDataComponent } from '../app/toolbar/toolbar-data.component';
import { ToolbarCDNComponent } from '../app/toolbar/toolbar-cdn.component';

export default {
    title: 'Toolbar',
    component: ToolbarComponent,
};

export const Base = () => ({
    component: ToolbarComponent,
});

export const Configurated = () => ({
    component: ToolbarConfiguratedComponent,
});

export const Data = () => ({
    component: ToolbarDataComponent,
});

export const CDN = () => ({
    component: ToolbarCDNComponent,
});

// export const Events = () => ({
//     component: SliderEventsComponent,
// });
