import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TempDrivenComponent } from './temp-driven.component';



@NgModule({
  declarations: [TempDrivenComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TempDrivenComponent]
})
export class TempDrivenModule { }
