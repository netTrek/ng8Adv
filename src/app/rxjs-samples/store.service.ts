import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class StoreService extends BehaviorSubject<{ count: number, username: string }> {

  constructor() {
    super ( {
      count   : 0,
      username: 'saban'
    } );
  }

  updateCount( newVal: number ) {
    const crr = this.getValue();
    this.next( {
      count: newVal, username: crr.username
    });
  }
}
