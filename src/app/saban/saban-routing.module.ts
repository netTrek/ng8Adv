import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SabanComponent } from './saban.component';

const routes: Routes = [{ path: '', component: SabanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabanRoutingModule { }
