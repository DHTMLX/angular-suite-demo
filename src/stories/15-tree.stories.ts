import { TreeComponent } from '../app/tree/tree.component';
import { TreeEventComponent } from '../app/tree/tree-event.component';
import { TreeCDNComponent } from '../app/tree/tree-cdn.component';

export default {
    title: 'Tree',
    component: TreeComponent,
};

export const Base = () => ({
    component: TreeComponent,
});

export const CDN = () => ({
    component: TreeCDNComponent,
});

export const Events = () => ({
    component: TreeEventComponent,
});
