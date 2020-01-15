import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynCompComponent } from './dyn-comp.component';
import { MyEntryComponent } from './my-entry/my-entry.component';



@NgModule({
  declarations: [DynCompComponent, MyEntryComponent],
  imports: [
    CommonModule
  ],
  exports: [DynCompComponent]
})
export class DynCompModule { }
