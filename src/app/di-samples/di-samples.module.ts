import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiSampleComponent } from './di-sample.component';



@NgModule({
  declarations: [DiSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [DiSampleComponent]/*,
  providers: [
    MyService
  ]*/
})
export class DiSamplesModule { }
