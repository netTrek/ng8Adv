import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailAsyncDirective, MailDirective } from './mail.directive';
import { SerialDirective } from './serial.directive';


// ng generate module formUtils --module temp-driven
@NgModule({
  declarations: [MailDirective, MailAsyncDirective, SerialDirective],
  imports: [
    CommonModule
  ],
  exports: [MailDirective, MailAsyncDirective, SerialDirective]
})
export class FormUtilsModule { }
