import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserItemComponent } from './userlist/user-item/user-item.component';



@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UserItemComponent ],
  exports     : [
    UserComponent
  ],
  imports     : [
    CommonModule
  ]
})
export class UserModule { }
