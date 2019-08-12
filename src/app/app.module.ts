import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [ // registrieurng von Komponenten, Direktiven, Pipes
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [], // Services in DI
  bootstrap: [AppComponent] // Root - Komponente
})
export class AppModule { }


