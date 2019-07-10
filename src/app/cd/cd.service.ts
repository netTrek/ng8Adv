import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable ()
export class CdService {

  constructor() {
  }

  countTo( num: number = 10 ): Observable<number> {
    return interval ( 100 )
      .pipe ( take ( num ) );
  }
}
