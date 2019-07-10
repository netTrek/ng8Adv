import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TempDrivenComponent } from './temp-driven.component';
import { FormUtilsModule } from '../form-utils/form-utils.module';



@NgModule({
  declarations: [TempDrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    FormUtilsModule
  ],
  exports: [TempDrivenComponent]
})
export class TempDrivenModule { }
