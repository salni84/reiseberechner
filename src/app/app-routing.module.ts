import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SbbPageComponent} from "./sbb-page/sbb-page.component";
import {Reisen} from "./reisen/reisen.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Reisen
  },
  {
    path: 'sbb',
    component: SbbPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
