import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';

@NgModule ( {
  declarations: [ UserComponent, UserListComponent, UserListItemComponent ],
  imports     : [
    CommonModule
  ],
  exports     : [ // option --export packt die Komponente in diese Liste
    UserComponent/*, UserListComponent*/
  ]
} )
export class UserModule {
}
