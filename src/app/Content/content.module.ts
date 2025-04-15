import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LeftContentModule } from './LeftPanel/left-content.module';
import { RightContentModule } from './RightPanel/right-content.module';

import { ContentComponent } from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [BrowserModule, LeftContentModule, RightContentModule],
  exports: [ContentComponent],
  bootstrap: [ContentComponent]
})

export class ContentModule {}
