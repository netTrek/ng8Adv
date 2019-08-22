import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvz-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  width = 100;

  constructor() { }

  ngOnInit() {
    let intervalID: number;
    intervalID = window.setInterval( () => {
      this.width -= 10;
      if ( this.width === 0 ) {
        window.clearInterval( intervalID );
      }
    }, 1000 );
  }

}
