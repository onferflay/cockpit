import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }      from './app.component';


const routes: Routes = [
  { path: 'cockpit', component: AppComponent },
  { path: 'cockpit/:ckid', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
