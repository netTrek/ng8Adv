import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, fromEvent, interval, Observable, of, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, find, first, map, mapTo, skipWhile, startWith, take, takeWhile, tap } from 'rxjs/operators';

@Component ( {
  selector   : 'rp-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls  : [ './rxjs-samples.component.scss' ]
} )
export class RxjsSamplesComponent implements OnInit {

  @ViewChild ('agb', {static: true })
  agb: ElementRef<HTMLButtonElement>;

  @ViewChild ('datenschutz', {static: true })
  datenschutz: ElementRef<HTMLButtonElement>;

  constructor() {
  }

  ngOnInit() {
    // this.initOfSample();
    // this.initIntervalSample();
    // this.initCombine ();
    // console.log ( this.agb, this.datenschutz );
    // this.initNewSample();
    // this.initHotSubjectSample ();
    this.initHotBehaviorSubjectSample ();
  }

  private initHotBehaviorSubjectSample() {
    const behavior = new BehaviorSubject<number>( undefined );
    const observable: Observable<number> = behavior
      .pipe(
        skipWhile ( value => !value ),
        distinctUntilChanged()
      )
    ;
    // observable.next( 0 );
    this.subscribe( observable, '#1 ' );
    behavior.next( 1 );
    behavior.next( 1 );
    behavior.next( 1 );
    behavior.next( 2 );
    this.subscribe( observable, '#2 ' );
    behavior.next( 3 );
    behavior.complete();
  }

  private initHotSubjectSample() {
    const observable: Subject<number> = new Subject<number>();
    observable.next( 0 );
    this.subscribe( observable, '#1 ' );
    observable.next( 1 );
    observable.next( 2 );
    this.subscribe( observable, '#2 ' );
    observable.next( 3 );
    observable.complete();
  }

  private initNewSample() {
    const observable: Observable<number> = new Observable( subscriber => {
      // subscriber.next( 1 );
      // subscriber.next( 2 );
      // // subscriber.error( 'ups da ist was falsch');
      // subscriber.next( 3 );
      // subscriber.next( 4 );
      // subscriber.complete();

      let counter = 0;
      let intervalID = window.setInterval(
        () => {
          subscriber.next( counter ++ );
          console.log ( 'crr counter = ', counter );
          if ( counter === 20 ) {
            stopInterval();
          }
        }, 100
      );
      const stopInterval = () => {
        if ( !! intervalID ) {
          window.clearInterval( intervalID );
          intervalID = undefined;
        }
      };
      return stopInterval;
    }) ;
    const subscription                   = this.subscribe (
      observable.pipe( take ( 3 ) ), '---'
    );
  }

  private initCombine() {
    // const observable = combineLatest (
    //   interval ( 100 ).pipe (
    //     tap ( next => console.log ('tick m', (next + 1) * 100, 'ms' ) ),
    //     map ( value => value + 'm' ),
    //     take ( 10 )
    // ),
    //   interval ( 200 ).pipe (
    //     tap ( next => console.log ('tick k', (next + 1) * 200, 'ms' ) ),
    //     map( value => value + 'k' ),
    //     take ( 10 )
    // )
    // );
    // const observable = forkJoin (
    //   interval ( 100 ).pipe (
    //     tap ( next => console.log ('tick m', (next + 1) * 100, 'ms' ) ),
    //     map ( value => value + 'm' ),
    //     take ( 10 )
    // ),
    //   interval ( 200 ).pipe (
    //     tap ( next => console.log ('tick k', (next + 1) * 200, 'ms' ) ),
    //     map( value => value + 'k' ),
    //     take ( 10 )
    // )
    const observable = forkJoin (
      fromEvent( this.agb.nativeElement, 'click' ).pipe (
        first(),
        mapTo ( true )
      ),
      fromEvent( this.datenschutz.nativeElement, 'click' ).pipe (
        first(),
        mapTo ( true )
      )
    );
    observable.subscribe(
      ( [agbBestaetigt, datenschutzBestaetigt] ) => console.log ( agbBestaetigt, datenschutzBestaetigt )
    );
    // this.subscribe( observable );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval ( 100 )
      .pipe (
        // startWith( 1 ),
        // take ( 3 )
        // skipWhile ( value => value < 5 ),
        // takeWhile( value => value < 10 ),
        // filter( value => value < 5 )
        tap ( v => console.log ( '...', ++ v ) ),
        find ( value => value === 5 )
      );
    const subscription                   = this.subscribe ( observable );
    // console.log ( subscription );
  }

  private initOfSample() {
    const observable: Observable<number> = of ( 1, 2, 3, 4, 5 );
    const subscription                   = this.subscribe ( observable );
    console.log ( subscription );
  }

  private subscribe( observable: Observable<any>, prefix: string = '' ): Subscription {
    return observable.subscribe (
      next => console.log ( prefix, next ),
      error => console.error ( prefix, error ),
      () => console.log ( prefix, 'ich habe fertig' )
    );
  }
}
