import { Injectable } from '@angular/core';
import { User } from './user';
import { PlayWithMe } from './play-with-me';
import { BehaviorSubject } from 'rxjs';

// ng generate service user/user --skipTests
@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList$: BehaviorSubject<User[]> = new BehaviorSubject ( [
    { firstname: 'saban', lastname: 'ünlü' },
    { firstname: 'peter', lastname: 'müller' }
  ] );

  constructor( private play: PlayWithMe ) {
    this.updatePlayVal ();
  }

  add( user: User ) {
    // this.userList.push ( user );
    this.userList$.next( [ ...this.userList$.value, user ] );
    this.updatePlayVal ();
  }

  update( user: User, firstname: string, lastname: string ): User {
    user.firstname = firstname;
    user.lastname  = lastname;
    this.userList$.next( this.userList$.value );
    return user;
  }

  del( user: User ) {
    const crrList = this.userList$.value;
    const ind = crrList.indexOf ( user );
    if ( ind !== - 1 ) {
      crrList.splice ( ind, 1 );
      this.userList$.next( crrList );
      this.updatePlayVal ();
      return true;
    }
    return false;
  }

  private updatePlayVal() {
    this.play.update ( this.userList$.value.length );
  }
}
