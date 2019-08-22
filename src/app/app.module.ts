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
    RxjsSamplesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'},
    ReversePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
