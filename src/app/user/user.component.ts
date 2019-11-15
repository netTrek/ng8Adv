import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserStore } from './user-store';
import { Observable } from 'rxjs';
import { loadUsers } from './user.actions';
import { map } from 'rxjs/operators';
import { User } from './user';

@Component({
  selector: 'nt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private userStore$: Observable<UserStore>;
  private loading$: Observable<boolean>;
  private success$: Observable<boolean>;
  private error$: Observable<boolean>;
  private users$: Observable<User[]>;

  constructor( private store: Store<{user: UserStore}> ) {
    this.userStore$ = this.store.pipe( select( 'user') );
    this.userStore$.subscribe( next => console.log ( next ) );
    this.loading$ = this.userStore$.pipe( map (value => value.loading ) );
    this.success$ = this.userStore$.pipe( map (value => value.success ) );
    this.error$ = this.userStore$.pipe( map (value => value.error ) );
    this.users$ = this.userStore$.pipe( map (value => value.users ) );
  }

  ngOnInit() {

  }

  loadUsers () {
    this.store.dispatch( loadUsers() );
  }
}
