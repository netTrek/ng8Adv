import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule ( {
  declarations: [ UserComponent, UserListComponent ],
  imports     : [
    CommonModule
  ],
  exports     : [ // option --export packt die Komponente in diese Liste
    UserComponent, UserListComponent
  ]
} )
export class UserModule {
}
