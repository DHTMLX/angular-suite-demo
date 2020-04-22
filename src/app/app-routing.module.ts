import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RichtextCDNComponent } from './richtext/richtext.component';

const routes: Routes = [ { path: 'richtext/basic', component: RichtextCDNComponent } ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {}
