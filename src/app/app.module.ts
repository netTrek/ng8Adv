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
registerLocaleData( localeDE );

export const myFac = locale => locale === 'de' ? 'deutsch' : 'englisch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule, UtilsModule, ContentSampleModule, PipeSamplesModule, RxjsSamplesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de' },
    {provide: 'saban', useValue: 'saban uenlue' },
    {provide: RUNDP, useValue: 'rundp' },
    {provide: COMPANIES, useValue: 'rundp', multi: true  },
    {provide: FAC_TEST, useFactory: myFac, deps: [ LOCALE_ID] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
