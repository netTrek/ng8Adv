import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector   : 'dvz-user',
  templateUrl: './user.component.html',
  // template: `hello world`,
  styleUrls  : [ './user.component.scss' ],
  // styles: [`h1 { color: red }`],
  encapsulation: ViewEncapsulation.Emulated
} )
export class UserComponent implements OnInit {
  username = 'saban ünlü';

  constructor() {
  }

  ngOnInit() {
    this.chgName();
  }

  chgName() {
    this.username = 'peter müller';
  }
}
