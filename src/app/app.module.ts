import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ShareModule } from './share/share.module';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { DiSamplesModule } from './di-samples/di-samples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    ShareModule,
    RxjsSamplesModule,
    DiSamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
