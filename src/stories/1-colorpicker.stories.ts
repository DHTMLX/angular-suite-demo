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
  props: {
   options: {
    customColors: ['#1d2de7', '#ab31ff', '#a3fa76', '#eeeeee', 'red', 'gray'],
   }
  }
});

export const CDN = () => ({
  component: ColorPickerCDNComponent,
});

export const Event = () => ({
  component: ColorpickerEventComponent
});
