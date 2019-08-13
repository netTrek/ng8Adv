import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { DangerDirective } from './danger.directive';

/**
 * ng generate module shares --module app
 */

@NgModule({
  declarations: [CountdownComponent, DangerDirective],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, DangerDirective]
})
export class SharesModule { }
