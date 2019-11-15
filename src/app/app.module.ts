import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { UtilsModule } from './utils/utils.module';
import { ContentSampleModule } from './content-sample/content-sample.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';


import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { COMPANIES, FAC_TEST, RUNDP } from './app.incection-tokens';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppErrorInterceptorService } from './app-error-interceptor.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
registerLocaleData( localeDE );

export const myFac = locale => locale === 'de' ? 'deutsch' : 'englisch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule, UtilsModule, ContentSampleModule, PipeSamplesModule, RxjsSamplesModule, HomeModule, ContactModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' },
    {provide: 'saban', useValue: 'saban uenlue' },
    {provide: RUNDP, useValue: 'rundp' },
    {provide: COMPANIES, useValue: 'rundp', multi: true  },
    {provide: FAC_TEST, useFactory: myFac, deps: [ LOCALE_ID] },
    {provide: HTTP_INTERCEPTORS,
      useClass: AppErrorInterceptorService,
      multi: true },
    {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
