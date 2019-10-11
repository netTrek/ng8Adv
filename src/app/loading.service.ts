import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  counter = 0;

  constructor() { }

  add() {
    this.counter ++;
  }

  remove() {
    interval( 150 ).pipe( first() ).subscribe(
      next => this.counter --
    );
  }
}
