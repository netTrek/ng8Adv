import { Injectable } from '@angular/core';

@Injectable ({providedIn: 'root'}) //
export class MyTestService {
  wert = 'hello world';

  constructor( /* DI */ ) {
  }
}
