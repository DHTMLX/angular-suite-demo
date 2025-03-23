import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content.component';
import { LeftContentModule } from './LeftContent/left-content.module';
import { RightContentModule } from './RightContent/right-content.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [BrowserModule, LeftContentModule, RightContentModule],
  exports: [ContentComponent],
  bootstrap: [ContentComponent]
})

export class ContentModule {}
