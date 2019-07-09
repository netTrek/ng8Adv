import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSamplesComponent } from './rxjs-samples.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';



@NgModule({
  declarations: [RxjsSamplesComponent, AComponent, BComponent],
  imports: [
    CommonModule
  ],
  exports: [RxjsSamplesComponent]
})
export class RxjsSamplesModule { }
