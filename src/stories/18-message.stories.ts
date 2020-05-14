import { MessageComponent } from '../app/message/message.component';
import { MessageCDNComponent } from '../app/message/message-cdn.component';

export default {
    title: 'Message',
    component: MessageComponent,
};

export const Base = () => ({
    component: MessageComponent,
});

export const CDN = () => ({
    component: MessageCDNComponent,
});
