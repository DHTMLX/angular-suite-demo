import { ColorPickerComponent } from '../app/colorpicker/colorpicker.component';
import { ColorPickerCDNComponent } from '../app/colorpicker/colorpicker-cdn.component';
import { ColorpickerEventComponent } from '../app/colorpicker/colorpicker-event.component';
import { ColorpickerComponentConfigurated } from '../app/colorpicker/colorpicker-configured.component';

export default {
    title: 'Color Picker',
    component: ColorPickerCDNComponent,
};

export const Base = () => ({
  component: ColorPickerComponent,
});

export const Configurated = () => ({
  component: ColorpickerComponentConfigurated,
});

export const CDN = () => ({
  component: ColorPickerCDNComponent,
});

export const Event = () => ({
  component: ColorpickerEventComponent
});
