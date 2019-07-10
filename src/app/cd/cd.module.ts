import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdComponent } from './cd.component';
import { CdDefaultComponent } from './cd-default/cd-default.component';
import { CdPushComponent } from './cd-push/cd-push.component';

@NgModule({
  declarations: [CdComponent, CdDefaultComponent, CdPushComponent],
  imports: [
    CommonModule
  ],
  exports: [CdComponent, CdDefaultComponent, CdPushComponent]
})
export class CdModule { }
