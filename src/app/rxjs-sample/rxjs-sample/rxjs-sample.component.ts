import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, Subject, Subscription } from 'rxjs';
import { filter, find, first, last, map, take, takeWhile } from 'rxjs/operators';

@Component ( {
  selector   : 'dvz-rxjs-sample',
  templateUrl: './rxjs-sample.component.html',
  styleUrls  : [ './rxjs-sample.component.scss' ]
} )
export class RxjsSampleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initOfSample ();
    // this.initIntervalSample ();
    // this.initNewSample ();
    // this.initCustomInterval ( );
    // this.initSubjectSample ();
    // this.initBehaviorSubjectSample();
    this.initFromEvent ();
  }

  private initFromEvent() {
    const event$ = fromEvent<MouseEvent>( document, 'mousemove' )
      .pipe(
        map ( value => value.clientY),
        find ( value => value < 10 )
      );
    this.subscribe( event$ );
  }

  private initBehaviorSubjectSample() {
    const sub = new BehaviorSubject<number> ( 0 );
    this.subscribe( sub , '1# ');
    sub.next( 1 );
    sub.next( 2 );
    sub.next( 3 );
    this.subscribe( sub , '2# ');
    sub.next( 4 );
    this.subscribe( sub , '3# ');
    sub.complete();
  }

  private initSubjectSample() {
    const sub = new Subject<number> ();
    this.subscribe( sub , '1# ');
    sub.next( 1 );
    sub.next( 2 );
    sub.next( 3 );
    this.subscribe( sub , '2# ');
    sub.next( 4 );
    this.subscribe( sub , '3# ');
    sub.complete();
  }

  private initCustomInterval( time = 100 ) {
    const observable: Observable<number> =
            new Observable<number> (
              process => {
                let intervalID;
                let val = 0;
                intervalID = window.setInterval(
                  () => process.next( val ++ ), time
                );
                return () => {
                  window.clearInterval( intervalID );
                };
              }
            );
    this.subscribe( observable.pipe( take ( 3 ) ), '1# ' );
    const sub = this.subscribe( observable, '2# ' );
    interval ( 500 )
      .pipe ( first () )
      .subscribe (
        next => sub.unsubscribe ()
      );
  }

  private initNewSample() {
    const observable: Observable<number> =
            new Observable<number> (
              process => {
                process.next( 1 );
                process.next( 2 );
                process.error( 'ups....');
                process.next( 3 );
                process.complete();
                return () => {
                  console.log ( 'process end' );
                };
              }
            );
    const sub = this.subscribe( observable );
    // interval ( 300 )
    //   .pipe ( first () )
    //   .subscribe (
    //     next => sub.unsubscribe ()
    //   );
  }

  private initIntervalSample() {
    const observable: Observable<number> =
            interval ( 1000 )
              .pipe ( take ( 10 ) );

    const sub = this.subscribe ( observable );
    interval ( 3000 )
      .pipe ( first () )
      .subscribe (
        next => sub.unsubscribe ()
      );
  }

  private initOfSample() {
    const observable: Observable<number> =
            of<number> ( 1, 2, 3, 4 );

    const result: Observable<number> =
            observable.pipe (
              map ( value => value * 10 ),
              filter ( value => value % 20 === 0 ) // 20, 40
              // find ( value => value > 20 ) // 30
              // takeWhile( value => value < 30 ) // 20
              // take ( 2 ) // 20
              // last () // 40
            );

    this.subscribe ( result );
    // this.subscribe ( result , '1');
    // this.subscribe ( result , '2');

  }

  private subscribe( observable: Observable<any>, prefix: string = '' ): Subscription {
    return observable.subscribe (
      ( next ) => {
        console.log ( prefix + 'next', next );
      },
      error => console.error ( prefix, error ),
      () => {
        console.log ( prefix + 'ich habe fertig' );
      }
    );
  }

}
