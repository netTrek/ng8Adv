/**
 * ng generate module rxjsSamples
 *        --module app
 * ng generate component rxjsSamples/rxjsSamples
 *        --export
 *        --flat
 *        --inline-style
 *        --inline-template
 *        --skip-tests
 */

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, fromEvent, interval, Observable, of, range, Subject } from 'rxjs';
import { combineAll, filter, find, first, map, startWith, take, tap } from 'rxjs/operators';
import { MyService } from '../di-samples/my-service';

@Component ( {
  selector: 'msg-rxjs-samples',
  template: `
    <p>{{$myService.myVar$ | async}}</p>
    <msg-a></msg-a>
    <msg-b></msg-b>
  `,
  styles  : []
} )
export class RxjsSamplesComponent implements OnInit {

  constructor( public $myService: MyService ) { }

  ngOnInit() {
    this.initOfSample ();
    // this.initRangeSample ();
    // this.initIntervalSample ();
    // this.initNewSample ();
    // this.initNewWithIntervSample ();
    // this.initFromEventSample ();
    // this.initForkSample ();
    // this.initCombineLatestSample ();
    // this.initHotWithSubbject ();
    // this.initHotWithBehaviorSubject ();
  }

  private initHotWithBehaviorSubject() {
    const sub = new BehaviorSubject<number>( 0 );
    this.subscribe( sub , 'erste sub');
    sub.next( 1 );
    sub.next( 2 );
    sub.next( 3 );
    this.subscribe( sub , 'zweite sub');
    sub.next( 4 );
    sub.next( 5 );
    sub.next( 6 );
    this.subscribe( sub , 'dritte sub');
    sub.next( 7 );
    sub.complete();
  }

  private initHotWithSubbject() {
    const sub = new Subject();

    sub.next( 1 );
    sub.next( 2 );
    sub.next( 3 );
    this.subscribe( sub , 'erste sub');
    sub.next( 4 );
    sub.next( 5 );
    sub.next( 6 );
    this.subscribe( sub , 'zweite sub');
    sub.next( 7 );
    sub.complete();
  }

  private initCombineLatestSample() { // wenn beide fertig dann auswerten
    const obs1 = interval ( 100 )
      .pipe ( take ( 3 ) );
    const obs2 = interval ( 100 )
      .pipe ( take ( 5 ) );
    const obs  = combineLatest<any, any> ( [ obs1,
                                             obs2
    ] );
    this.subscribe ( obs );
  }

  private initForkSample() { // wenn beide fertig dann auswerten
    const obs1 = interval ( 100 )
      .pipe ( take ( 3 ) );
    const obs2 = interval ( 100 )
      .pipe ( take ( 5 ) );
    const obs  = forkJoin ( [ obs1,
                              obs2
    ] );
    this.subscribe ( obs );
  }

  private initFromEventSample() {
    const obs = fromEvent<MouseEvent> ( document, 'mousemove' )
      .pipe (
        map ( value => value.clientX ),
        find ( value => value > 300 )
      );
    this.subscribe ( obs );
  }

  private initNewWithIntervSample() {
    const obs: Observable<number> = new Observable<number> ( observer => {
      let startVal  = 10;
      let intervalID;
      const dispose = () => {
        window.clearInterval ( intervalID );
        intervalID = undefined;
      };
      intervalID    = window.setInterval ( () => {
        startVal += 10;
        console.log ( 'intern', startVal );
        if ( startVal === 100 ) {
          observer.complete ();
          dispose ();
        } else {
          observer.next ( startVal );
        }
      }, 100 );
      return dispose;
    } );
    this.subscribe ( obs, 'innere terminierung' );
    this.subscribe ( obs.pipe ( first () ), 'äußere terminierung' ); // äußere terminierung
    // this.subscribe ( obs ); // cold!!!
  }

  private initNewSample() {
    const obs: Observable<number> = new Observable ( observer => {
      observer.next ( 4 );
      observer.next ( 5 );
      observer.error ( 'ups ....' );
      observer.next ( 6 );
      observer.next ( 7 );
      observer.complete ();
    } );
    this.subscribe ( obs );
  }

  private initIntervalSample() {
    const obs: Observable<number> = interval ( 100 )
      .pipe (
        map ( value => value * 10 ), // jeden Wert mal 10,
        take ( 5 ) // nach 5 Werten terminieren
      );
    this.subscribe ( obs );
  }

  private initRangeSample() {
    const obs: Observable<number> = range ( 4, 5 )
      .pipe (
        map ( value => value * 10 ) // jeden Wert mal 10
      );
    this.subscribe ( obs );
  }

  private initOfSample() {
    const obs: Observable<number> = of ( 1, 2, 3, 4, 5, 6, 7 )
      .pipe (
        map ( value => value * 10 ), // jeden Wert mal 10
        filter ( value => value > 40 ), // nur Werte über 40
        find ( value => value >= 60 ), // terminier ab Wert 60
        tap( x => this.$myService.myVar$.next( x + '' ) )
      );
    this.subscribe ( obs, 'of Sample' );
  }

  private subscribe( obs: Observable<any>, msg = '' ) {
    obs.subscribe (
      // ( next: number ) => {
      //   console.log ( 'next value', next );
      // }
      // arrow abk. 1 ohne Klammern
      // next => {
      //   console.log ( 'next value', next );
      // }
      // arrow abk. 2 onhne geschweifte Klammern mit Return
      value => console.log ( `${msg} next value`, value ),
      err => console.error ( `${msg} error`, err ),
      () => console.log ( `${msg} ich habe fertig` )
    );
  }
}
