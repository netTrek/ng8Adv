import { Injectable } from '@angular/core';

@Injectable ( {providedIn: 'root'})
export class Dummy {
  wert1 = 123;

  constructor() {
    console.log ( 'new dummy born' );
  }

  sagHallo() {
    console.log ( 'hallo' );
  }

  change( newVal: number ) {
    this.wert1 = newVal;
  }
}
