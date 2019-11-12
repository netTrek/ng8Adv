import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSampleComponent } from './content-sample.component';



@NgModule({
  declarations: [ContentSampleComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentSampleComponent]
})
export class ContentSampleModule { }
