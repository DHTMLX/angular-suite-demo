import { TreeComponent } from '../app/tree/tree.component';
import { TreeEventComponent } from '../app/tree/tree-event.component';
import { TreeCDNComponent } from '../app/tree/tree-cdn.component';
import { TreeDataComponent } from '../app/tree/tree-data.component';

export default {
    title: 'Tree',
    component: TreeComponent,
};

export const Base = () => ({
    component: TreeComponent,
});

export const Data = () => ({
    component: TreeDataComponent,
});

export const CDN = () => ({
    component: TreeCDNComponent,
});

export const Events = () => ({
    component: TreeEventComponent,
});
