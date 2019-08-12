import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';

/**
 * ng generate module shares --module app
 */

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent]
})
export class SharesModule { }
