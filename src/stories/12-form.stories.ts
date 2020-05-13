import { FormComponent } from '../app/form/form.component';
import { FormEventComponent } from "../app/form/form-event.component";
import { FormCDNComponent } from '../app/form/form-cdn.component';
import { FormConfiguratedComponent } from '../app/form/form-configured.component';

export default {
    title: 'Form',
    component: FormComponent,
};

export const Base = () => ({
    component: FormComponent,
});

export const Configurated = () => ({
    component: FormConfiguratedComponent,
});

export const CDN = () => ({
    component: FormCDNComponent,
});

export const Events = () => ({
  component: FormEventComponent,
});

// // export const Data = () => ({
// //     component: RibbonDataComponent,
// // });



