import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeSamplesComponent } from './pipe-samples.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PipeSamplesComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [PipeSamplesComponent]
})
export class PipeSamplesModule { }
