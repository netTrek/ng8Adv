import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { UserListComponent } from './user-list/user-list.component';
import { MachWasDirective } from './mach-was.directive';
import { ForElemDirective } from './for-elem.directive';
import { MachWas2Directive } from './mach-was-2.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule ( {
  declarations: [ UserComponent,
                  UserIconComponent,
                  UserListComponent,
                  MachWasDirective,
                  ForElemDirective,
                  MachWas2Directive
  ],
  imports     : [
    CommonModule, HttpClientModule
  ],
  exports     : [ UserComponent,
                  UserIconComponent,
                  UserListComponent,
                  MachWasDirective,
                  MachWas2Directive
  ]
} )
export class UserModule {
}
