import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.scss']
})
export class TempDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send( value: { name: string, credentials: { email: string, password: string } } ) {
    console.log ( 'sending', value );
  }
}
