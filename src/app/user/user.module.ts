import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './userlist/useritem/useritem.component';
import { SharesModule } from '../shares/shares.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
// import { MyTestService } from './my-test-service';



@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UseritemComponent, UserDetailComponent ],
  exports: [
    UserComponent,
    UserDetailComponent
  ],
  // providers: [MyTestService], // bevopr provideIn innerhalb des Injectable zur Verfügung stand
  imports     : [
    CommonModule, SharesModule, HttpClientModule, RouterModule
  ]
})
export class UserModule { }
