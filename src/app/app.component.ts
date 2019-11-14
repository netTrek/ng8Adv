import { Component } from '@angular/core';
import { UserService } from './user/user-service';
import { pairwise } from 'rxjs/operators';
import { UserStoreService } from './user/user-store.service';
import { User } from './user/user';

@Component ( {
  selector   : 'rp-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'rundp';
  action: string;

  constructor( userStore$: UserStoreService ) {
    userStore$.getKey<User[]>('userList')
         .pipe(
           pairwise ()
         )
         .subscribe(
           ([prev, next]) => this.action = prev.length < next.length ? 'hinzugefügt' : 'gelöscht'
    );
  }
}

