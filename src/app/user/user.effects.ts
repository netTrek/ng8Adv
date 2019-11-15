import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersFailed, loadUsersSuccess } from './user.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable ()
export class UserEffects {
  private users: Observable<User[]> = this.$http.get<User[]> ( 'http://localhost:3000/users/' );

  loadUser$ = createEffect (
    () => this.actions$
              .pipe (
                tap ( m => console.log ( m ) ),
                ofType ( loadUsers.type ),
                mergeMap (
                  () => this.users
                            .pipe (
                              map ( users => ({ type: loadUsersSuccess.type, users }) ),
                              catchError ( err  => of ( { type: loadUsersFailed.type, err } ) ) )
                )
              )
  );

  constructor (
    private actions$: Actions,
    private $http: HttpClient
  ) {
  }

}
