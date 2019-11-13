import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn.directive';



@NgModule( {
  declarations: [ CountdownComponent, DangerBtnDirective ],
  exports     : [
    CountdownComponent,
    DangerBtnDirective
  ],
  imports     : [
    CommonModule
  ]
})
export class UtilsModule { }
