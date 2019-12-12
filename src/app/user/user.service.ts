import { Injectable } from '@angular/core';
import { User } from './user';
import { PlayWithMe } from './play-with-me';

// ng generate service user/user --skipTests
@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList: User[] = [
    { firstname: 'saban', lastname: 'ünlü' },
    { firstname: 'peter', lastname: 'müller' }
  ];

  constructor( private play: PlayWithMe ) {
    this.updatePlayVal();
  }

  add( user: User ) {
    this.userList.push ( user );
    this.updatePlayVal();
  }

  update( user: User, firstname: string, lastname: string ): User {
    user.firstname = firstname;
    user.lastname = lastname;
    return user;
  }

  del( user: User ) {
    const ind = this.userList.indexOf ( user );
    if ( ind !== - 1 ) {
      this.userList.splice ( ind, 1 );
      this.updatePlayVal();
      return true;
    }
    return false;
  }

  private updatePlayVal() {
    this.play.update(this.userList.length);
  }
}
