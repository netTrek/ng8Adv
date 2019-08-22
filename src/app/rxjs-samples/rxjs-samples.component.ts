import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, interval, Observable, of, Subject, Subscription } from 'rxjs';
import { filter, first, map, take, takeWhile } from 'rxjs/operators';

@Component ( {
  selector   : 'dvz-rxjs-samples',
  templateUrl: './rxjs-samples.component.html',
  styleUrls  : [ './rxjs-samples.component.scss' ]
} )
export class RxjsSamplesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // this.initOfSample ();
    // this.initIntervalSample ();
    // this.initSubjectSample();
    // this.initBehaviorSubjectSample();
    this.initFromEventSample ();
  }

  private initFromEventSample() {
    const observable: Observable<number> =
            fromEvent<MouseEvent> ( document, 'mousemove' )
              .pipe(
                map ( value => value.clientY ),
                takeWhile( value => value > 0 )
              )
    ;
    // this.subscribe( observable );
    observable.subscribe( undefined, undefined, () => {
      alert( 'willst du wirklich geehn :(');
    });
  }

  private initBehaviorSubjectSample() {
    const observable: Subject<number> = new BehaviorSubject<number> ( null );
    this.subscribe ( observable, '#0' );
    observable.next ( 0 );
    this.subscribe ( observable, '#1' );
    observable.next ( 1 );
    observable.next ( 2 );
    this.subscribe ( observable, '#2' );
    observable.next ( 3 );
  }

  private initSubjectSample() {
    const observable: Subject<number> = new Subject<number> ();
    observable.next ( 0 );
    this.subscribe ( observable, '#1' );
    observable.next ( 1 );
    // observable.error( 'ups .... da ist was schiefgelaufen');
    observable.complete ();
    observable.next ( 2 );
    this.subscribe ( observable, '#2' );
    observable.next ( 3 );
  }

  private initIntervalSample() {
    const observable: Observable<number> = interval ( 500 )
      .pipe (
        // take ( 4 ),
        filter ( value => value % 2 === 0 ),
        map ( value => value * 10 ), // function (value) { retrun value * 10}
        first ()
      );
    const sub                            = this.subscribe ( observable, '#1' );
    // window.setTimeout( () => this.subscribe ( observable, '#2' ), 250 );
    //
    // console.log ( {...sub} );
    // window.setTimeout( () => {
    //   sub.unsubscribe();
    //   console.log ( sub );
    // }, 2000 );
    //
  }

  private initOfSample() {
    const observable: Observable<number> = of ( 1, 2, 3, 4, 5, 6 );
    this.subscribe ( observable, '1#' );
  }

  private subscribe( observable: Observable<any>, prefix: string = '' ): Subscription {
    return observable.subscribe (
      next => console.log ( prefix, next ),
      error => console.error ( prefix, error ),
      () => console.log ( prefix, 'ich habe fertig ...' )
    );
  }
}
