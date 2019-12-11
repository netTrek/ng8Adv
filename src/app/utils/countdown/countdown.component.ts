import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'nt-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {
  percent = 100;

  private intervalId: number;

  constructor() {
  }

  ngOnInit() {
    this.intervalId = setInterval (
      () => {
        this.percent -= 5;
        if ( this.percent === 0 ) {
          this.stopInterval ();
        }
      },
      100
    );
  }

  private stopInterval() {
    if ( !! this.intervalId ) {
      clearInterval ( this.intervalId );
      this.intervalId = undefined;
    }
  }

  ngOnDestroy(): void {
    this.stopInterval();
  }

}
