import { PopupComponent } from '../app/popup/popup.component';
import { PopupEventComponent } from '../app/popup/popup-event.component';
import { PopupCDNComponent } from '../app/popup/popup-cdn.component';

export default {
    title: 'Popup',
    component: PopupComponent,
};

export const Base = () => ({
    component: PopupComponent,
});

export const CDN = () => ({
    component: PopupCDNComponent,
});

export const Events = () => ({
    component: PopupEventComponent,
});
