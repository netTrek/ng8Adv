import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component ( {
  selector   : 'dvz-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  selectedUser: User;
  showForm = false;

  constructor( public $user: UserService ) {
  }

  ngOnInit() {
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
    if ( !! this.selectedUser ) {
      this.delInd( this.$user.userList.indexOf( this.selectedUser ));
    }
  }

  delInd( ind: number ) {
    const deleted = this.$user.delInd( ind );
    if ( deleted === this.selectedUser ) {
        this.selectedUser = undefined;
    }
  }
  addUser( name: string, age: number|string ) {
    this.$user.addUser( name, age );
    this.deactivateForm();
  }
  activateForm() {
    this.showForm = true;
  }
  deactivateForm() {
    this.showForm = false;
  }
}
