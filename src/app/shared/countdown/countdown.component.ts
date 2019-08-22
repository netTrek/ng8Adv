import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'dvz-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  width = 100;

  private intervalID: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalID = window.setInterval ( () => {
      this.width -= 10;
      if ( this.width === 0 ) {
        this.stopInterval ();
      }
    }, 1000 );
  }

  ngOnDestroy(): void {
    this.stopInterval ();
  }

  private stopInterval() {
    if ( this.intervalID ) {
      window.clearInterval ( this.intervalID );
      this.intervalID = undefined;
    }
  }

}
