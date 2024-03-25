import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RightContentComponent } from './right-content.component';
import { ChartComponent } from './Chart/chart.component';
import { FormComponent } from './Form/form.component';
import { ButtonsFormComponent } from './Buttons/buttons.component';
import { ColorpickerComponent } from './Colorpicker/colorpicker.component';
import { MessageDataviewComponent } from './Messages/messages.component';

@NgModule({
  declarations: [
    RightContentComponent,
    ChartComponent,
    FormComponent,
    ButtonsFormComponent,
    ColorpickerComponent,
    MessageDataviewComponent
  ],
  imports: [BrowserModule],
  exports: [RightContentComponent],
  providers: [],
  bootstrap: [RightContentComponent],
})
export class RightContentModule {}
