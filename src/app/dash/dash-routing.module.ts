import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';


const routes: Routes = [
  // {path: 'saban'} // /dash/saban
  {path: '', component: DashComponent } // /dash
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
