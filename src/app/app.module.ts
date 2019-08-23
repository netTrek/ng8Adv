import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
import { ReversePipe } from './shared/reverse.pipe';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppTokenInterceptorService } from './app-token-interceptor.service';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
registerLocaleData( localeDE );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    PipeSamplesModule,
    RxjsSamplesModule,
    HomeModule,
    ContactModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'},
    {provide: HTTP_INTERCEPTORS, useClass: AppTokenInterceptorService, multi: true},
    ReversePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
