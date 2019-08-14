import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  users: User[] = [
    { firstname: 'saban', lastname: 'ünlü', age: 44 },
    { firstname: 'peter', lastname: 'Müller', age: 33 },
    { firstname: 'heike', lastname: 'Mayer', age: 22 }
  ];
  selectedUser: User;
  constructor() {
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
