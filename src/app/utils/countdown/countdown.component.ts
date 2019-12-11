import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
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
    clearInterval ( this.intervalId );
  }

}
