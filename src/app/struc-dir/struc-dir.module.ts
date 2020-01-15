import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseStrucDirComponent } from './use-struc-dir/use-struc-dir.component';
import { StrucDirDirective } from './struc-dir.directive-of';



@NgModule({
  declarations: [UseStrucDirComponent, StrucDirDirective],
  imports: [
    CommonModule
  ],
  providers: [StrucDirDirective],
  exports: [UseStrucDirComponent, StrucDirDirective]
})
export class StrucDirModule { }
