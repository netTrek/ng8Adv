import { Component, HostListener, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component ( {
  selector   : 'msg-a',
  templateUrl: './a.component.html',
  styleUrls  : [ './a.component.scss' ]
} )
export class AComponent implements OnInit {
  count$: Observable<number>;

  constructor( private store$: StoreService ) {
    this.count$ = this.store$.pipe ( map ( value => value.count ) );
  }

  ngOnInit() {
  }

  @HostListener ( 'click' )
  private update() {
    const count = this.store$.getValue ().count;
    this.store$.updateCount ( count + 1 );
  }

}
