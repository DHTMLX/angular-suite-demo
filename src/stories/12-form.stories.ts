import { FormComponent } from '../app/form/form.component';
import { FormEventComponent } from "../app/form/form-event.component";



export default {
    title: 'Form',
    component: FormComponent,
};

export const Base = () => ({
    component: FormComponent,
});

export const Events = () => ({
  component: FormEventComponent,
});

// export const Configurated = () => ({
//     component: DataviewConfiguratedComponent,
// });

// // export const Data = () => ({
// //     component: RibbonDataComponent,
// // });

// export const CDN = () => ({
//     component: DataviewCDNComponent,
// });


