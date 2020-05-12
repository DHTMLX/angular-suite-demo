import { TreeComponent } from '../app/tree/tree.component';
import { TreeEventComponent } from "../app/tree/tree-event.component";

export default {
    title: 'Tree',
    component: TreeComponent,
};

export const Base = () => ({
    component: TreeComponent,
});

export const Events = () => ({
    component: TreeEventComponent,
});
