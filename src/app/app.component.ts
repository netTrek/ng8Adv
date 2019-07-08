import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { first, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'msg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msg19';
  show = false;

  constructor() {
    interval( 1000 )
      .pipe(
        mapTo ( true ),
        first()
        // take ( 3 )
      ).subscribe( value => {
        this.show = value;
    });
  }
}
