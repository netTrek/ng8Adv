import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseStrucDirComponent } from './use-struc-dir/use-struc-dir.component';
import { StrucDirDirectiveOf } from './struc-dir.directive-of';



@NgModule({
  declarations: [UseStrucDirComponent, StrucDirDirectiveOf],
  imports: [
    CommonModule
  ],
  exports: [UseStrucDirComponent,StrucDirDirectiveOf]
})
export class StrucDirModule { }
