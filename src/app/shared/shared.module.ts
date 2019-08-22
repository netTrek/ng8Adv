import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { BindingsSampleComponent } from './bindings-sample/bindings-sample.component';
import { DangerDirective } from './danger.directive';



@NgModule({
  declarations: [CountdownComponent, BindingsSampleComponent, DangerDirective],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, BindingsSampleComponent, DangerDirective]
})
export class SharedModule { }
