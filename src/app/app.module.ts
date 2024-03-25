import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Sidebar/sidebar.component';
import { MainModule } from './MainContainer/main.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [BrowserModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
