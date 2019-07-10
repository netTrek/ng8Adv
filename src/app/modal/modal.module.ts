import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModaAComponent } from './moda-a/moda-a.component';



@NgModule({
  declarations: [ModaAComponent],
  imports: [
    CommonModule
  ],
  exports: [ModaAComponent]
})
export class ModalModule { }
