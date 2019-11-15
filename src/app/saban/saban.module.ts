import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabanRoutingModule } from './saban-routing.module';
import { SabanComponent } from './saban.component';


@NgModule({
  declarations: [SabanComponent],
  imports: [
    CommonModule,
    SabanRoutingModule
  ]
})
export class SabanModule { }
