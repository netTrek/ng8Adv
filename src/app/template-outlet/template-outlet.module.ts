import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOutletComponent } from './template-outlet.component';



@NgModule({
  declarations: [TemplateOutletComponent],
  exports: [TemplateOutletComponent],
  imports: [
    CommonModule
  ]
})
export class TemplateOutletModule { }
