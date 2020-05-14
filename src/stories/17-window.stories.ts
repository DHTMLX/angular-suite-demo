import { WindowComponent } from '../app/window/window.component';
import { WindowEventComponent } from '../app/window/window-event.component';
import { WindowCDNComponent } from '../app/window/window-cdn.component';

export default {
    title: 'Window',
    component: WindowComponent,
};

export const Base = () => ({
    component: WindowComponent,
});

export const CDN = () => ({
    component: WindowCDNComponent,
});

export const Events = () => ({
    component: WindowEventComponent,
});
