import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './userlist/useritem/useritem.component';
import { SharesModule } from '../shares/shares.module';
import { HttpClientModule } from '@angular/common/http';
// import { MyTestService } from './my-test-service';



@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UseritemComponent ],
  exports: [
    UserComponent
  ],
  // providers: [MyTestService], // bevopr provideIn innerhalb des Injectable zur Verfügung stand
  imports     : [
    CommonModule, SharesModule, HttpClientModule
  ]
})
export class UserModule { }
