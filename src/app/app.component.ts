import { Component } from '@angular/core';
import { User } from './user/user';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'msg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msg19';
  show = false;

  constructor( router: Router  ) {
    router.events.pipe(
      tap( console.warn ),
      filter( value => value instanceof ActivationEnd ),
      tap( console.log )
    ).subscribe( (value: ActivationEnd) => {
      if ( value.snapshot.outlet === 'modal' ) {
        this.show = true;
      }
    })
  }
}
