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
    const sub = $http.get<User[]>( 'http://localhost:3000/users' )
      .subscribe(
        // ( naechsterWert: User[] ) => {
        //   this.users = naechsterWert;
        // }
        next => this.users = next
      );
    // sub.unsubscribe(); // canceled xhr request
    this.init();
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
  }
  delUsr( user: User ): User | boolean {
    const ind = this.users.indexOf ( user );
    if ( ind !== - 1 ) {
      return this.users.splice( ind, 1 ) [0];
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
    if ( this.users.length > 0 ) {
      this.setSelectedUser ( this.users [ 0 ] );
    }
  }
}
