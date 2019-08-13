import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UseritemComponent } from './userlist/useritem/useritem.component';
import { SharesModule } from '../shares/shares.module';



@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UseritemComponent ],
  exports: [
    UserComponent
  ],
  imports     : [
    CommonModule, SharesModule
  ]
})
export class UserModule { }
