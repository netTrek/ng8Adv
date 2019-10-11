import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { skipWhile } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'dvz-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, OnDestroy {

  selectedUser: User;
  showForm = false;
  private sub: Subscription;

  constructor( public $user: UserService ) {
  }

  ngOnInit() {
    this.sub = this.$user.last$
        .pipe (
          skipWhile ( value => value !== undefined )
        )
        .subscribe (
          next => {
            if ( !!this.selectedUser ) {
              const newSelected = this.$user.userList.find ( value =>
                value.id === this.selectedUser.id );
              if ( !! newSelected ) {
                this.selectedUser = newSelected;
              }
            }
          }
        );
  }

  selectUser( user: User/*, payload?: any*/ ) {
    /*console.log ( payload );*/
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  delSelected() {
    if ( !!this.selectedUser ) {
      this.delInd ( this.$user.userList.indexOf ( this.selectedUser ) );
    }
  }

  delInd( ind: number ) {
    const deleted = this.$user.delInd ( ind );
    if ( deleted === this.selectedUser ) {
      this.selectedUser = undefined;
    }
  }

  addUser( name: string, age: number | string ) {
    this.$user.addUser ( name, age );
    this.deactivateForm ();
  }

  activateForm() {
    this.showForm = true;
  }

  deactivateForm() {
    this.showForm = false;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
