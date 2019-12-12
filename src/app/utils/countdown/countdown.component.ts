import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'nt-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  percent = 100;
  @Input()
  duration = 2000;
  private subscription: Subscription;

  // private intervalId: number;

  constructor() {
  }

  ngOnInit() {
    /*
    this.intervalId = setInterval (
      () => {
        this.percent -= 5;
        if ( this.percent === 0 ) {
          this.stopInterval ();
        }
      },
      100
    );
    */
    /*
    this.subscription = interval(100).pipe(
      map( ( input ) => {
        return input + 1;
      }),
      take ( 20 )
    ).subscribe(
      (next) => {
        console.log ( next );
        this.percent -= 5;
      }
    );
    */
    this.subscription = interval(+this.duration / 20 ).pipe(
      map( input => input + 1),
      take ( 20 )
    ).subscribe(
      next => this.percent -= 5
    );
  }

  private stopInterval() {
    /*
    if ( !! this.intervalId ) {
      clearInterval ( this.intervalId );
      this.intervalId = undefined;
    }
    */
    this.subscription.unsubscribe();
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

}
