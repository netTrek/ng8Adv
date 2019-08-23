import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserItemComponent } from './userlist/user-item/user-item.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule( {
  declarations: [ UserComponent, UserlistComponent, UserItemComponent, UserDetailsComponent ],
  exports     : [
    UserComponent,
    UserDetailsComponent
  ],
  // providers: [SabanService, PeterService],
  imports     : [
    CommonModule, SharedModule, HttpClientModule
  ]
})
export class UserModule { }
