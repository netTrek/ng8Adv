import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from './user-model';
import { map, skipWhile } from 'rxjs/operators';
import { AbstractStore } from '../store/abstract-store';

@Injectable ( {
  providedIn: 'root'
} )
export class UserStoreService extends AbstractStore<UserModel> {

  constructor() {
    super ( {
        userList: [
          // { firstname: 'saban', lastname: 'uenlue' },
          // { firstname: 'peter', lastname: 'mueller' }
        ]
      }
    );
  }
}
