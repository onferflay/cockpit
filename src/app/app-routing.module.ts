import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from './app.component';


const routes: Routes = [
  { path: 'cockpit', component: AppComponent },
  { path: '', redirectTo: '/cockpit', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
