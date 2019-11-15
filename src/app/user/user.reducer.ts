/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { User } from './user';
import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersFailed, loadUsersSuccess } from './user.actions';
import { UserStore } from './user-store';

export const initialState: UserStore  = {
  users: [],
  success: false,
  loading: false,
  error: false,
  err: undefined
};

const _userReducer = createReducer(initialState,
  on( loadUsers, state => (
    { ... state, loading: true, success: false, error: false } ) ),
  on( loadUsersSuccess, (state, { users } ) =>
    ({ ... state, loading: false, success: true, users }) ),
  on( loadUsersFailed, (state, { err } ) =>
    ({ ... state, loading: false, error: true, err }) ),
);

export function userReducer( state, action) {
  return _userReducer(state, action);
}
