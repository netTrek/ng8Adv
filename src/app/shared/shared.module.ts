import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { BindingsSampleComponent } from './bindings-sample/bindings-sample.component';



@NgModule({
  declarations: [CountdownComponent, BindingsSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [CountdownComponent, BindingsSampleComponent]
})
export class SharedModule { }
