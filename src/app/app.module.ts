import { BrowserModule } from '@angular/platform-browser';
import { ExistingProvider, FactoryProvider, NgModule, ValueProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ShareModule } from './share/share.module';
import { RxjsSamplesModule } from './rxjs-samples/rxjs-samples.module';
import { DiSamplesModule } from './di-samples/di-samples.module';
import { USER_EXI, USER_FAC, USER_NAME } from './my-token';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { ModalModule } from './modal/modal.module';
import { TempDrivenModule } from './temp-driven/temp-driven.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';
import { EmbeddedSamplesModule } from './embedded-samples/embedded-samples.module';
import { DynCompModule } from './dyn-comp/dyn-comp.module';
import { CdModule } from './cd/cd.module';

export const myFactory = ( userList: string [] ) => {
  const test = userList[0];
  return { test };
};

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
    DiSamplesModule,
    ModalModule,
    TempDrivenModule,
    ReactiveFormModule,
    EmbeddedSamplesModule,
    DynCompModule,
    CdModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: USER_NAME, useValue: 'Saban', multi: true} as ValueProvider,
    { provide: USER_NAME, useValue: 'Peter', multi: true} as ValueProvider,
    { provide: USER_EXI, useExisting: USER_NAME } as ExistingProvider,
    { provide: USER_FAC,
      useFactory: myFactory,
      deps: [ USER_NAME ]
    } as FactoryProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
