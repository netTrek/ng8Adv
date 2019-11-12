import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  width = 100;
  private intervalID: number;

  constructor() { }

  ngOnInit() {
    this.startInterval();
  }

  private startInterval() {
    this.intervalID = window.setInterval (
      () => {
        this.width -= 10;
        if ( this.width === 0 ) {
          this.stopInterval ();
        }
      }, 200
    );
  }

  private stopInterval() {
    window.clearInterval( this.intervalID );
  }

}
