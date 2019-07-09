import { Component } from '@angular/core';
import { User } from './user/user';
import { UserService } from './user/user.service';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'msg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msg19';

  constructor( public $user: UserService ) {
    interval( 1500 ).pipe(
      first()
    ).subscribe(
      value => $user.createNewUser( { lastname: 'Müller', firstname: 'Peter', birthday: '1974-11-04'} ).then( succ => {
        console.warn( 'new user is', succ );
      })
    );
  }
}
