import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { UserModule } from './user/user.module';
import { SharesModule } from './shares/shares.module';
import { PipeSamplesModule } from './pipe-samples/pipe-samples.module';

import localeDe from '@angular/common/locales/de';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { DashModule } from './dash/dash.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module'; // deutsch importieren
registerLocaleData( localeDe ); // deutsch im sys registrieren

@NgModule({
  declarations: [ // registrieurng von Komponenten, Direktiven, Pipes
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharesModule,
    PipeSamplesModule,
    RxjsSamplesModule,
    DashModule,
    HomeModule,
    ContactModule
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'de' } // falls deutsch die standard sprache sein soll
  ], // Services in DI
  bootstrap: [AppComponent] // Root - Komponente
})
export class AppModule { }


