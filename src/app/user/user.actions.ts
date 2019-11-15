/**
 * File created by suenlue on 2019-11-14.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { createAction, props } from '@ngrx/store';
import { User } from './user';

export const loadUsers = createAction('[User Component] load Users');
export const loadUsersSuccess = createAction('[User Component] load Users successful',
  props<{ users: User[] }>());
export const loadUsersFailed = createAction('[User Component] load Users failed',
  props<{ err: any }>());

