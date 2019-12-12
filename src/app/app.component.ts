import { Component } from '@angular/core';
import { PlayWithMe } from './user/play-with-me';
import { filter } from 'rxjs/operators';

@Component ( {
  selector   : 'nt-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {
  title = 'trainingHH';

  constructor( play: PlayWithMe ) {
    play.pipe(
      filter( value => !! value ),
    ).subscribe( value => console.log ( 'current num ob user', value ) );
  }
}
