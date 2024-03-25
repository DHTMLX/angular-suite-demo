import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainContainerComponent } from './main.component';
import { ToolbarComponent } from './Toolbar/toolbar.component';
import { TabbarComponent } from './Tabbar/tabbar.component';
import { ContentModule } from './Content/content.module';

@NgModule({
  declarations: [MainContainerComponent, ToolbarComponent, TabbarComponent],
  imports: [BrowserModule, ContentModule],
  exports: [MainContainerComponent],
  providers: [],
  bootstrap: [MainContainerComponent],
})
export class MainModule {}
