import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { IchWeissDasWarSehrSchnellComponent } from './ich-weiss-das-war-sehr-schnell/ich-weiss-das-war-sehr-schnell.component';


@NgModule({
  declarations: [DashComponent, IchWeissDasWarSehrSchnellComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
