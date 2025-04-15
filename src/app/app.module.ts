import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainModule } from './MainContainer/main-container.module';

import { SidebarComponent } from './Sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [BrowserModule, MainModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
