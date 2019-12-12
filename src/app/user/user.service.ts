import { Injectable } from '@angular/core';
import { User } from './user';
import { PlayWithMe } from './play-with-me';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

// ng generate service user/user --skipTests
@Injectable ( {
  providedIn: 'root'
} )
export class UserService {

  userList$: BehaviorSubject<User[]> = new BehaviorSubject ( [
    /*    { firstname: 'saban', lastname: 'ünlü' },
        { firstname: 'peter', lastname: 'müller' }*/
  ] );

  constructor( private play: PlayWithMe,
               private $http: HttpClient ) {
    this.updateUsrList ();
    this.updatePlayVal ();
  }

  getById( id: number ): Observable<User> {
    return this.$http.get<User> ( environment.api + id );
  }

  add( user: User ): Promise<User> {
    // this.userList.push ( user );
    // this.userList$.next ( [ ...this.userList$.value,
    //                         user
    // ] );
    return this.$http.post<User> ( environment.api, user )
               .pipe (
                 tap ( n => this.updateUsrList () )
               )
               .toPromise ();
  }

  update( user: User ): Promise<User> {
    // user.firstname = firstname;
    // user.lastname  = lastname;
    // this.userList$.next ( this.userList$.value );
    // return user;
    return this.$http.put<User> (
      environment.api + user.id, user
    )
               .pipe (
                 tap ( n => this.updateUsrList () )
               )
               .toPromise ();
  }

  del( user: User ): Promise<void> {
    // const crrList = this.userList$.value;
    // const ind     = crrList.indexOf ( user );
    // if ( ind !== - 1 ) {
    //   crrList.splice ( ind, 1 );
    //   this.userList$.next ( crrList );
    //   this.updatePlayVal ();
    //   return true;
    // }
    // return false;
    return this.$http.delete<void> ( environment.api + user.id )
               .pipe (
                 tap ( n => this.updateUsrList () )
               )
               .toPromise ();
  }

  private updateUsrList(): void {
    this.$http.get<User[]> ( environment.api )
        .subscribe (
          value => {
            this.userList$.next ( value );
            this.updatePlayVal ();
          }
        );
  }

  private updatePlayVal() {
    this.play.update ( this.userList$.value.length );
  }
}
