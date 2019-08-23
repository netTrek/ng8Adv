import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  name = 'saban ünlü';
  name$: BehaviorSubject<string> = new BehaviorSubject( '****saban ünlü' );
  userList: User[] = [
    { firstname: 'Saban', lastname: 'Ünlü', age: 44 },
    { firstname: 'Heike', lastname: 'Maier', age: 43 },
    { firstname: 'Peter', lastname: 'Müller', age: 42 }
  ];
  constructor() { }
  addUser() {
    const age = Date.now ();
    this.userList.push (
      {
        firstname: `saban ${age}`,
        lastname : `uenlue ${age}`,
        age
      }
    );
  }

  delLast(): User {
    const lng = this.userList.length;
    if ( lng > 0 ) {
      return this.delUsr ( this.userList [ lng - 1 ] );
    }
    return undefined;
  }

  delUsr( usr: User ): User {
    const ind = this.userList
                    .indexOf ( usr );
    if ( ind !== - 1 ) {
      return this.userList
          .splice ( ind, 1 ) [0];
    }

    return undefined;

  }
}
