import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BindingSamplesModule } from './binding-samples/binding-samples.module';
import { UtilsModule } from './utils/utils.module';
import { PipeSamplesModule } from '../pipe-samples/pipe-samples.module';
import { registerLocaleData } from '@angular/common';

import localeDE from '@angular/common/locales/de';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
registerLocaleData( localeDE );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BindingSamplesModule,
    UtilsModule,
    PipeSamplesModule,
    RxjsSamplesModule,
    RxjsSamplesModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
