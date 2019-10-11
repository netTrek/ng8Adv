import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import { PipeSampleModule } from './pipe-sample/pipe-sample.module';

import { registerLocaleData } from '@angular/common';
import localeDE from '@angular/common/locales/de';
import { MY_CLASS_SAMPLE, MY_FAC_SAMPLE, MY_NAME, NAMES } from './app.token';
import { RxjsSampleModule } from './rxjs-sample/rxjs-sample.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HomeModule } from './home/home.module';
import { LoadingInterceptorService } from './loading-interceptor.service';

registerLocaleData( localeDE ); // registriere neue Sprache

export interface TestInt {
  wert: number;
}
export class TestClassProvider implements TestInt {
  wert = 123;
}

export const fac = () => 12;

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    UtilsModule,
    PipeSampleModule,
    RxjsSampleModule,
    HttpClientModule,
    HomeModule
  ],
  providers   : [
    {provide: LOCALE_ID, useValue: 'de' },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true },
    { provide: MY_NAME, useValue: 'saban ünlü'},
    { provide: NAMES, useValue: 'saban', multi: true},
    { provide: MY_CLASS_SAMPLE, useClass: TestClassProvider },
    { provide: MY_FAC_SAMPLE, useFactory: fac },
    /*Dummy*/
  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
