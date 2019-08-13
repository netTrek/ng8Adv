import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, fromEvent, interval, Observable, of, Subject, Subscription } from 'rxjs';
import { combineAll, filter, find, first, map, take, takeWhile } from 'rxjs/operators';

@Component ( {
  selector   : 'ba-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls  : [ './rxjs-sample.component.scss' ]
} )
export class RxjsSampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initOfSample ();
    // this.initIntervalSample();
    // this.initNewObs ();
    // this.initFromEvent ();
    // this.initMyOwnFromEvent ();
    // this.initForkJoin ();
    // this.initCombineLates();
    this.initSubject ();
    this.initBehSubject ();
  }

  private initBehSubject() { // hot observable
    const observable = new BehaviorSubject<number>( 0 );
    this.subscribe ( observable, '0#' );
    observable.next ( 1 );
    observable.next ( 2 );
    observable.next ( 3 );
    this.subscribe ( observable, '1#' );
    observable.next ( 4 );
    observable.next ( 5 );
    observable.next ( 6 );
    this.subscribe ( observable, '2#' );
    observable.next ( 7 );
    observable.next ( 8 );
    observable.next ( 9 );
    this.subscribe ( observable, '3#' );

  }

  private initSubject() {  // hot observable
    const observable = new Subject ();
    observable.next ( 1 );
    observable.next ( 2 );
    observable.next ( 3 );
    this.subscribe ( observable, '1#' );
    observable.next ( 4 );
    observable.next ( 5 );
    observable.next ( 6 );
    this.subscribe ( observable, '2#' );
    observable.next ( 7 );
    observable.next ( 8 );
    // observable.error( 'ups .... fehler');
    observable.complete();
    observable.next ( 9 );
    this.subscribe ( observable, '3#' );

  }

  private initCombineLates() {
    const interval1  = interval ( 100 )
      .pipe ( take ( 3 ) );
    const interval2  = interval ( 1000 )
      .pipe ( take ( 5 ) );
    const observable = combineLatest ( [ interval1,
                                         interval2
    ] );
    this.subscribe ( observable );
  }

  private initForkJoin() {
    const interval1  = interval ( 100 )
      .pipe ( take ( 3 ) );
    const interval2  = interval ( 1000 )
      .pipe ( take ( 5 ) );
    const observable = forkJoin ( [ interval1,
                                    interval2
    ] );
    this.subscribe ( observable );
  }

  private initFromEvent() {
    const observable = fromEvent<MouseEvent> ( document, 'mousemove' )
      .pipe (
        map ( value => value.clientX ),
        takeWhile ( value => value < 300 )
      );
    const sub        = this.subscribe ( observable );
    interval ( 1500 )
      .pipe (
        first () )
      .subscribe ( next => sub.unsubscribe () );
  }

  private initMyOwnFromEvent() {
    const observable = new Observable ( observer => {
      const handler = ( event: MouseEvent ) => {
        observer.next ( event );
      };
      const dispose = () => {
        document.removeEventListener ( 'mousemove', handler );
      };
      document.addEventListener ( 'mousemove', handler );
      return dispose;
    } );
    this.subscribe ( observable );
  }

  private initNewObs() {
    const observable: Observable<number> = new Observable<number> ( observer => {
      let count     = 0;
      let intervalID: number;
      const dispose = () => {
        window.clearInterval ( intervalID );
        intervalID = undefined;
      };
      intervalID    = window.setInterval ( () => {
        observer.next ( count ++ );
        if ( count === 10 ) {
          dispose ();
        }
      }, 100 );
      return dispose;
    } );
    this.subscribe ( observable, '1# run' );
    this.subscribe ( observable.pipe ( take ( 3 ) ), '2# run' );
    // this.subscribe( observable, '3# run' );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval ( 100 )
      .pipe ( take ( 10 ) );
    this.subscribe ( observable );
  }

  private initOfSample() {
    const observable: Observable<number> = of ( 1, 2, 3, 4, 5 )
      .pipe (
        map ( value => value * 10 ),
        filter ( value => value > 20 )
        // find( value => value > 40 )
        // take ( 2 )
        // first()
      );
    this.subscribe ( observable, 'sub from of' );
  }

  private subscribe( observable: Observable<any>, prefix: string = '' ): Subscription {
    return observable.subscribe (
      nextVal => console.log ( `${prefix} `, nextVal ),
      errorVal => console.error ( `${prefix} `, errorVal ),
      () => console.log ( `${prefix} ich habe fertig` )
    );
  }
}
