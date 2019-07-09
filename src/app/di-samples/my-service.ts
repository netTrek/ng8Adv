import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({providedIn: 'root'})
export class MyService {
  myVar$: BehaviorSubject<string> = new BehaviorSubject( 'saban' );
  selectedUsr$: BehaviorSubject<User> =
        new BehaviorSubject( undefined );
}
