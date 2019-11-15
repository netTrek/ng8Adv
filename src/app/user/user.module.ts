import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UtilsModule } from '../utils/utils.module';
import { UserService } from './user-service';
import { COMPANIES, RUNDP } from '../app.incection-tokens';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';

@NgModule( {
  declarations: [ UserComponent,
                  UserListComponent,
                  UserListItemComponent,
                  UserDetailsComponent ],
  imports: [
    CommonModule,
    UtilsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    UserComponent,
    UserListComponent
  ],
  providers: [
    {provide: RUNDP, useValue: 'netTrek' },
    {provide: COMPANIES, useValue: 'netTrek', multi: true  }
  ]
  // exports: [UserComponent]
})
export class UserModule { }
