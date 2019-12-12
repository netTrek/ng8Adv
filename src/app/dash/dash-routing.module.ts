import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash.component';
import { IchWeissDasWarSehrSchnellComponent } from './ich-weiss-das-war-sehr-schnell/ich-weiss-das-war-sehr-schnell.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'schnell', component: IchWeissDasWarSehrSchnellComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
