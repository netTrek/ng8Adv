import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  users: User[] = [];
  selectedUser: User;
  constructor( private $http: HttpClient ) {
    this.getUsers();
  }
  create( usr: User ) {
    this.$http.post( 'http://localhost:3000/users', usr )
        .subscribe(
          value => {
            this.getUsers();
          }
        );
  }
  getUsers() {
    const sub = this.$http.get<User[]>( 'http://localhost:3000/users' )
                     .subscribe(
                       // ( naechsterWert: User[] ) => {
                       //   this.users = naechsterWert;
                       // }
                       next => {
                         this.users = next;
                         this.init();
                       }
                     );
    // sub.unsubscribe(); // canceled xhr request
  }

  setSelectedUser( selectedUser: User ) {
    if ( this.selectedUser === selectedUser ) {
      this.selectedUser = undefined;
    } else {
      this.selectedUser = selectedUser;
    }
  }
  delLastUsr() {
    const usr = this.users.pop ();
    if ( usr === this.selectedUser ) {
      this.selectedUser = undefined;
    }
    this.delUser ( usr );
  }

  delUsr( user: User ): User | boolean {
    const ind = this.users.indexOf ( user );
    if ( ind !== - 1 ) {
      const usr = this.users.splice( ind, 1 ) [0];
      this.delUser ( usr );
      return usr;
    }
    return false;
  }
  delSelectedUsr() {
    if ( this.selectedUser ) {
      this.delUsr ( this.selectedUser );
      this.selectedUser = undefined;
    }
  }
  private init() {
    this.preselectFirst();
  }
  private preselectFirst() {
    if ( this.users.length > 0 || ! this.selectedUser ) {
      this.setSelectedUser ( this.users [ 0 ] );
    }
  }

  private delUser( usr ) {
    this.$http.delete ( `http://localhost:3000/users/${usr.id}` )
        .subscribe (
          value => {
            this.getUsers ();
          }
        );
  }
}
