import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { MY_NAME, NAMES } from '../app.token';



@NgModule({
  declarations: [UserComponent, UserListComponent, UserListItemComponent],
  imports: [
    CommonModule,
    UtilsModule
  ],
  providers: [
    { provide: MY_NAME, useValue: 'Peter Müller'},
    { provide: NAMES, useValue: 'peter', multi: true}
  ],
  exports: [UserComponent]
})
export class UserModule { }
