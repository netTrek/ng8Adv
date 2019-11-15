import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';

//  ng g m dash --routing --module app --route=dash
@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
