import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentModule } from '../Content/content.module';
import { MainContainerComponent } from './main-container.component';
import { ToolbarComponent } from './Toolbar/toolbar.component';
import { TabbarComponent } from './Tabbar/tabbar.component';

@NgModule({
  declarations: [MainContainerComponent, ToolbarComponent, TabbarComponent],
  imports: [BrowserModule, ContentModule],
  exports: [MainContainerComponent],
  bootstrap: [MainContainerComponent]
})

export class MainModule {}
