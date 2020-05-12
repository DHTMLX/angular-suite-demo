import { WindowComponent } from '../app/window/window.component';
import { WindowEventComponent } from "../app/window/window-event.component";

export default {
    title: 'Window',
    component: WindowComponent,
};

export const Base = () => ({
    component: WindowComponent,
});

export const Events = () => ({
    component: WindowEventComponent,
});
