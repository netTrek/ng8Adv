import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormUtilsModule } from '../form-utils/form-utils.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule, FormUtilsModule, ReactiveFormsModule
  ],
  exports: [ReactiveFormComponent]
})
export class ReactiveFormModule { }
