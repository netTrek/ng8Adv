import { Component, Inject, LOCALE_ID } from '@angular/core';
import { UserService } from './user/user-service';
import { pairwise } from 'rxjs/operators';
import { UserStoreService } from './user/user-store.service';
import { User } from './user/user';
import { COMPANIES, FAC_TEST, RUNDP } from './app.incection-tokens';

@Component ( {
  selector   : 'rp-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'rundp';
  action: string;

  constructor(
    userStore$: UserStoreService,
    @Inject('saban') saban: string,
    @Inject( LOCALE_ID ) locale: string,
    @Inject( RUNDP ) company: string,
    @Inject( COMPANIES ) companies: string[],
    @Inject( FAC_TEST ) language: string
  ) {
    console.log ( locale, saban, company, companies, language );
    userStore$.select<User[]>('userList')
         .pipe(
           pairwise ()
         )
         .subscribe(
           ([prev, next]) => this.action = prev.length < next.length ? 'hinzugefügt' : 'gelöscht'
    );
  }
}

