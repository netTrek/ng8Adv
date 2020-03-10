import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerBtnDirective } from './danger-btn/danger-btn.directive';
import { ReversePipe } from './reverse/reverse.pipe';
import { RoleDirective } from './role.directive';
import { HelperDirective } from './helper.directive';



@NgModule({
  declarations: [CountdownComponent, DangerBtnDirective, ReversePipe, RoleDirective, HelperDirective],
  imports: [
    CommonModule
  ],
  exports: [ CountdownComponent,
             DangerBtnDirective,
             ReversePipe,
             RoleDirective,
             HelperDirective
  ]
})
export class UtilsModule { }
