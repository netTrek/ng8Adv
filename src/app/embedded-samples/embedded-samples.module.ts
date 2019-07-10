import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbeddedSamplesComponent } from './embedded-samples.component';
import { TempViaContentComponent } from './temp-via-content/temp-via-content.component';
import { ContentTempComponent } from './content-temp/content-temp.component';
import { TempDirective } from './temp.directive';



@NgModule({
  declarations: [EmbeddedSamplesComponent, TempViaContentComponent, ContentTempComponent, TempDirective],
  imports: [
    CommonModule
  ],
  exports: [EmbeddedSamplesComponent]
})
export class EmbeddedSamplesModule { }
