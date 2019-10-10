import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'dvz-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit {

  width = 100;
  private intervalID: number;
  constructor() {
  }
  ngOnInit() {
    this.startInterval ();
  }
  private startInterval() {
    this.intervalID = window.setInterval ( () => {
      this.width -= 1;
      if ( this.width <= 0 ) {
        this.stopInterval ();
      }
    }, 100 );
  }
  private stopInterval() {
    this.width = 0;
    window.clearInterval ( this.intervalID );
    console.log ( 'ENDE' );
  }
}
