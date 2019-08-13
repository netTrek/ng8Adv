import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './userlist/useritem/useritem.component';



@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UseritemComponent ],
  exports: [
    UserComponent
  ],
  imports     : [
    CommonModule
  ]
})
export class UserModule { }
