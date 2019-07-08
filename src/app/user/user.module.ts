import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserComponent, UserIconComponent, UserListComponent],
  imports: [
    CommonModule
  ],
  exports: [ UserComponent,
             UserIconComponent,
             UserListComponent
  ]
})
export class UserModule { }
