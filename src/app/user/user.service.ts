import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  name                           = 'saban ünlü';
  name$: BehaviorSubject<string> = new BehaviorSubject ( '****saban ünlü' );
  userList: User[]               = [];
  token = 'netTrek'; // steht erst nach Login bereit

  constructor( private $http: HttpClient ) {
  }

  getUsers(): Promise<User[]> {
    return this.$http.get<User[]> ( environment.endpoint )
               .pipe (
                 tap ( next => this.userList = next ) )
               .toPromise ();

    /*
    // header sample
    const headers: HttpHeaders = new HttpHeaders().set('token', 'netTrek');
    return this.$http.get<User[]> ( environment.endpoint, { headers } )
               .pipe (
                 tap ( next => this.userList = next )
               )
               .toPromise ();


        // params sample
        const params: HttpParams = new HttpParams().set( 'token', 'netTrek');
        return this.$http.get<User[]>( environment.endpoint, {params} )
                   .pipe(
                     tap( next => this.userList = next )
                   ).toPromise();
    */
  }

  updateUsr( user: User ): Promise<User> {
    return this.$http.put<User> ( `${environment.endpoint}/${user.id}`, user )
               .pipe ( tap ( x => this.getUsers () ) )
               .toPromise ();
  }

  createUser( user?: User ): Promise<User> {
    user = user || this.getDummyUser ();
    return this.$http.post<User> ( environment.endpoint, user )
               .pipe (
                 tap ( x => this.getUsers () ) // aktuellsten Stand immer von DB holen
                 // tap ( newUser => this.userList.push( newUser ) ) // lokalen Stand pflegen
               )
               .toPromise ();
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
      // return this.userList
      //            .splice ( ind, 1 ) [ 0 ];
      this.$http.delete ( `${environment.endpoint}/${usr.id}` )
          .subscribe (
            value => this.getUsers ()
          );
      return usr;
    }

    return undefined;

  }

  private getDummyUser(): User {
    const age = Date.now ();
    return {
      firstname: `saban ${age}`,
      lastname : `uenlue ${age}`,
      age
    } as User;
  }
}
