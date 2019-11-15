/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { createReducer, on, State } from '@ngrx/store';
import { decrementHome, decrementVisitor, incrementHome, incrementVisitor, resetScore, setScore } from './score.actions';
import { Score } from './score';

export const initialState: Score = {
  home: 0,
  visitor: 0
};

const _scoreReducer = createReducer(initialState,
  on( incrementHome, state => ({...state, home: state.home + 1}) ),
  on( incrementVisitor, state => ({...state, visitor: state.visitor + 1})),
  on( decrementHome, state => ({...state, home: state.home - 1})),
  on( decrementVisitor, state => ({...state, visitor: state.visitor - 1})),
  on( resetScore, state => ( { home: 0, visitor: 0 } ) ),
  on( setScore, ( state, { home, visitor } ) => ( { home, visitor }) ),
);

export function scoreReducer( state, action) {
  return _scoreReducer(state, action);
}
