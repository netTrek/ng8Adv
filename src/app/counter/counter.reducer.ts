/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, setVal } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(setVal, ( state, { value } ) => value ),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
