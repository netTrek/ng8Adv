import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import { PipeSampleModule } from './pipe-sample/pipe-sample.module';

import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';

registerLocaleData( localeDE ); // registriere neue Sprache

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UtilsModule,
    PipeSampleModule
  ],
  providers   : [
    {provide: LOCALE_ID, useValue: 'de' }
    /*Dummy*/
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
