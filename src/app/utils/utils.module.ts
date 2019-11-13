import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn.directive';
import { BrotherDirective } from './brother.directive';



@NgModule( {
  declarations: [ CountdownComponent, DangerBtnDirective, BrotherDirective ],
  exports     : [
    CountdownComponent,
    BrotherDirective,
    DangerBtnDirective
  ],
  imports     : [
    CommonModule
  ]
})
export class UtilsModule { }
