import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RightContentComponent } from './right-content.component';
import { ChartComponent } from './Chart/chart.component';
import { FormComponent } from './Form/form.component';
import { ButtonsFormComponent } from './ButtonsForm/buttons-form.component';
import { ColorpickerComponent } from './Colorpicker/colorpicker.component';
import { MessageDataviewComponent } from './MessageDataview/message-dataview.component';

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
  bootstrap: [RightContentComponent]
})

export class RightContentModule {}
