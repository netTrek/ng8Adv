import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn.directive';
import { BrotherDirective } from './brother.directive';
import { RouterModule } from '@angular/router';



@NgModule( {
  declarations: [ CountdownComponent, DangerBtnDirective, BrotherDirective ],
  exports     : [
    CountdownComponent,
    BrotherDirective,
    DangerBtnDirective
  ],
  imports     : [
    CommonModule,
    RouterModule
  ]
})
export class UtilsModule { }
