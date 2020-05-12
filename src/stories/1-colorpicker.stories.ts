import { ColorPickerCDNComponent } from '../app/colorpicker/colorpicker.component';
import { ColorpickerEventComponent } from '../app/colorpicker/colorpicker-event.component';

export default {
    title: 'Color Picker',
    component: ColorPickerCDNComponent,
};

export const ColorPickerCDN = () => ({
    component: ColorPickerCDNComponent,
    // props: {
    //   text: 'Hello Button',
    // },
});

export const Event = () => ({
  component: ColorpickerEventComponent
});
