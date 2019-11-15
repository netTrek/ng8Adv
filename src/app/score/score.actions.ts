/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */

import { createAction, props } from '@ngrx/store';

export const incrementHome = createAction('[Score Component] Increment Home');
export const decrementHome = createAction('[Score Component] Decrement Home');
export const incrementVisitor = createAction('[Score Component] Increment Visitor');
export const decrementVisitor = createAction('[Score Component] Decrement Visitor');
export const resetScore = createAction('[Score Component] Reset');
export const setScore = createAction(
  '[Score Component] Set Score',
  props<{ home: number, visitor: number }>()
);
