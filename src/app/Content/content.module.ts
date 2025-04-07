import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LeftContentModule } from './LeftContent/left-content.module';
import { RightContentModule } from './RightContent/right-content.module';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [BrowserModule, LeftContentModule, RightContentModule],
  exports: [ContentComponent],
  bootstrap: [ContentComponent]
})

export class ContentModule {}
