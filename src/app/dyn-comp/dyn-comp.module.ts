import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynCompComponent } from './dyn-comp.component';
import { RuntimeComponent } from './runtime/runtime.component';



@NgModule({
  declarations: [DynCompComponent, RuntimeComponent],
  imports: [
    CommonModule
  ],
  exports: [DynCompComponent, RuntimeComponent],
  entryComponents: [RuntimeComponent]
})
export class DynCompModule { }
