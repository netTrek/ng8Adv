import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Score } from './score';
import { decrement, increment } from '../counter/counter.actions';
import { decrementHome, decrementVisitor, incrementHome, incrementVisitor, resetScore, setScore } from './score.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nt-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  home$: Observable<number>;
  visitor$: Observable<number>;

  constructor( private store: Store<{score: Score}>) {
    this.home$ = store.pipe(
      select( 'score'),
      map ( value => value.home )
    );
    this.visitor$ = store.pipe(
      select( 'score'),
      map ( value => value.visitor )
    );
  }

  ngOnInit() {
  }

  incrementHome() {
    this.store.dispatch(incrementHome());
  }

  decrementHome() {
    this.store.dispatch(decrementHome());
  }

  incrementVisitor() {
    this.store.dispatch(incrementVisitor());
  }

  decrementVisitor() {
    this.store.dispatch(decrementVisitor());
  }

  resetScore() {
    this.store.dispatch(resetScore());
  }

  setScore() {
    this.store.dispatch(setScore(
      { visitor: 10, home: 10 }
    ));
  }

}
