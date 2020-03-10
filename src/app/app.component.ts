import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { PlayWithMe } from './user/play-with-me';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { HelperDirective } from './utils/helper.directive';

@Component ( {
  selector   : 'nt-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent implements AfterViewInit {

  @ViewChildren ( HelperDirective, {read: ElementRef})
  liElems: QueryList<ElementRef<HTMLLIElement>>;

  title = 'trainingHH';

  constructor( play: PlayWithMe, router: Router ) {
    play.pipe(
      filter( value => !! value ),
    ).subscribe( value => console.log ( 'current num ob user', value ) );

    router.events
          .pipe( filter ( value => value instanceof NavigationEnd ))
          .subscribe(
      navEvent => console.log ( navEvent )
    );
  }

  ngAfterViewInit(): void {
    console.log ( this.liElems.toArray() );
  }
}
