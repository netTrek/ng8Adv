import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component ( {
  selector   : 'rp-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements
  OnInit, OnDestroy {

  width = 100;
  private sub: Subscription;
  // private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    // this.startInterval ();
    this.sub = interval( 200 ).pipe(
      take ( 10 )
    ).subscribe(
      () => this.width -= 10
    );
  }

  // private startInterval() {
  //   this.intervalID = window.setInterval (
  //     () => {
  //       this.width -= 10;
  //       if ( this.width === 0 ) {
  //         this.stopInterval ();
  //       }
  //     }, 200
  //   );
  // }
  //
  // stopInterval() {
  //   if ( !!this.intervalID ) {
  //     window.clearInterval ( this.intervalID );
  //     this.intervalID = undefined;
  //   }
  // }

  ngOnDestroy(): void {
    // this.stopInterval ();
    this.sub.unsubscribe();
  }


}
