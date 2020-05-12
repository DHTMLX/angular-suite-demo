import { PopupComponent } from '../app/popup/popup.component';
import { PopupEventComponent } from '../app/popup/popup-event.component';

export default {
    title: 'Popup',
    component: PopupComponent,
};

export const Base = () => ({
    component: PopupComponent,
});

export const Events = () => ({
    component: PopupEventComponent,
});
