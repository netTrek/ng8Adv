import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserIconComponent } from './user-icon/user-icon.component';

@NgModule({
  declarations: [UserComponent, UserIconComponent],
  imports: [
    CommonModule
  ],
  exports: [ UserComponent,
             UserIconComponent
  ]
})
export class UserModule { }
