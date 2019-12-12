import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { PlayWithMe } from '../play-with-me';
import { UserService } from '../user.service';
import { $u } from 'codelyzer/angular/styles/chars';

@Component ( {
  selector   : 'nt-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit {

  selectedUser: User;

  constructor( public $user: UserService ) {
  }

  ngOnInit() {
  }

  selectUser( user: User ) {
    if ( this.selectedUser === user ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = user;
    }
  }

  async addNewUser( firstname: string, lastname: string ) {
    this.selectedUser = await this.$user.add ( { firstname, lastname } );
  }

  async updateSelectedUser( firstname: string,
                            lastname: string ) {
    // this.selectedUser = this.$user.update(
    //   this.selectedUser,
    //   firstname,
    //   lastname
    // );
    this.selectedUser = await this.$user.update ( {
      ...this.selectedUser, firstname, lastname
    } );
  }

  delSelectedUsr() {
    this.$user.del( this.selectedUser );
    this.selectedUser = undefined;
  }
}
