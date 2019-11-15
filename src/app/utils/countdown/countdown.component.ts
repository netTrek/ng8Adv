import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component ( {
  selector   : 'rp-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements
  OnInit, OnDestroy {

  width = 100;
  private sub: Subscription = new Subscription();
  // private intervalID: number;

  constructor( private router: Router ) {
  }

  ngOnInit() {
    // this.startInterval ();
    this.sub.add( interval( 200 ).pipe(
      take ( 10 )
    ).subscribe(
      () => {
        this.width -= 10;
        if ( this.width === 0 ) {
          this.sub.add(
            interval ( 500 )
              .pipe( first () )
              .subscribe ( next => this.router.navigate( ['users'] ) )
          );
        }
      }
    ));
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
