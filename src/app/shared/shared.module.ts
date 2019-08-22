import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { BindingsSampleComponent } from './bindings-sample/bindings-sample.component';
import { DangerDirective } from './danger.directive';
import { ReversePipe } from './reverse.pipe';



@NgModule({
  declarations: [CountdownComponent, BindingsSampleComponent, DangerDirective, ReversePipe],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, BindingsSampleComponent, DangerDirective, ReversePipe]
})
export class SharedModule { }
