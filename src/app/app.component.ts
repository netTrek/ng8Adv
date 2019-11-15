import { Component, Inject, LOCALE_ID } from '@angular/core';
import { UserService } from './user/user-service';
import { filter, map, pairwise } from 'rxjs/operators';
import { UserStoreService } from './user/user-store.service';
import { User } from './user/user';
import { COMPANIES, FAC_TEST, RUNDP } from './app.incection-tokens';
import { ActivationEnd, Router } from '@angular/router';

@Component ( {
  selector   : 'rp-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'rundp';
  action: string;

  showModal = false;

  constructor(
    private router: Router,
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

    router.events
          .pipe(
            filter( event => event instanceof ActivationEnd ),
            map<ActivationEnd, boolean>( event => event.snapshot.outlet === 'modal' )
          )
          .subscribe( showModal => this.showModal = showModal );
  }

  closeModal() {
    this.showModal = false;
    this.router.navigate( [{outlets: {modal: null}}] );
  }
}

