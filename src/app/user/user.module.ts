import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserItemComponent } from './userlist/user-item/user-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UserItemComponent ],
  exports     : [
    UserComponent
  ],
  // providers: [SabanService, PeterService],
  imports     : [
    CommonModule, SharedModule
  ]
})
export class UserModule { }
