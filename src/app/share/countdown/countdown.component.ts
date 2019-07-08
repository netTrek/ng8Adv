import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {

  width = 100;

  constructor() { }

  ngOnInit() {
    interval( 200 )
      .pipe(
        take ( 10 )
      )
      .subscribe( value => this.width -= 10 );
  }

}
