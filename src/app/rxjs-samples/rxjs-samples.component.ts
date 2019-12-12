import { Component, ElementRef, OnInit } from '@angular/core';
import { BehaviorSubject, from, fromEvent, interval, Observable, of, Subject, Subscription, timer } from 'rxjs';
import { find, map, take } from 'rxjs/operators';
import { element } from 'protractor';

@Component ( {
  selector   : 'nt-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls  : [ './rxjs-samples.component.scss' ]
} )
export class RxjsSamplesComponent implements OnInit {
  data$: Observable<any>;

  constructor( private elemRef: ElementRef) {
  }

  ngOnInit() {
    // this.initNewSample ();
    // this.initSubjectSample();
    // this.initBehaviorSubjectSample();
    this.initOfSample ();
    this.data$ = interval ( 100 )
      .pipe ( take ( 10000 ) );
  }

  private initNewSample() {
    const observable: Observable<number> = new Observable ( subscriber => {
      let counter      = 0;
      const intervalID = setInterval (
        () => {
          subscriber.next ( counter ++ );
        }, 100
      );
      // return { unsubscribe: () => clearInterval(intervalID) };
      return () => clearInterval ( intervalID );
    } );

    const subscription: Subscription = observable
      .pipe ( take ( 3 ) )
      .subscribe (
        next => console.log ( next ),
        error => console.error ( error ),
        () => console.log ( 'ich habe fertig' )
      );

  }

  private initSubjectSample() {
    const observable: Subject<number> = new Subject<number> ();
    observable.next ( 1 );
    observable.subscribe ( value => console.log ( '#1', value ) );
    observable.next ( 2 );
    observable.subscribe ( value => console.log ( '#2', value ) );
    observable.next ( 3 );
  }

  private initBehaviorSubjectSample() {
    const observable: BehaviorSubject<number> = new BehaviorSubject ( 0 );
    observable.subscribe ( value => console.log ( '#0', value ) );
    observable.next ( 1 );
    const sub = observable.subscribe ( value => console.log ( '#1', value ) );
    observable.next ( 2 );
    observable.subscribe ( value => console.log ( '#2', value ) );
    sub.unsubscribe ();
    observable.next ( 3 );
  }

  private initOfSample() {
    /*
    // of ( 5 ).subscribe (
    // of ( 5, 6 ,7 ).subscribe (
    from ( [ 1,
             2,
             3
    ] )
      .subscribe (
        next => console.log ( next ),
        error => console.error ( error ),
        () => console.log ( 'ich habe fertig' )
      );
    */
    // fromEvent<MouseEvent>( document, 'mousemove' )
    //   .pipe(
    //     map( value => value.clientY ),
    //     find( value => value < 10 )
    //   )
    //   .subscribe (
    //     next => confirm( 'du willst die seite doch nicht wirklich verlasse'),
    //     error => console.error ( error ),
    //     () => console.log ( 'ich habe fertig' )
    //   );
    // fromEvent( this.elemRef.nativeElement, 'click' )
    //   .subscribe (
    //     next => console.log ( next ),
    //     error => console.error ( error ),
    //     () => console.log ( 'ich habe fertig' )
    //   );
    timer( 2000 )
      .subscribe (
        next => console.log ( next ),
        error => console.error ( error ),
        () => console.log ( 'ich habe fertig' )
      );
  }
}
