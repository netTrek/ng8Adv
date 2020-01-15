import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateOutletModule } from './template-outlet/template-outlet.module';
import { StrucDirModule } from './struc-dir/struc-dir.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateOutletModule,
    StrucDirModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
