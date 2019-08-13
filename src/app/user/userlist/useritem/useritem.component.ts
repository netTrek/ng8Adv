import { Component, OnInit } from '@angular/core';

/*
 ng generate component useritem --skip-tests

 */
@Component ( {
  selector   : 'ba-useritem',
  templateUrl: './useritem.component.html',
  styleUrls  : [ './useritem.component.scss' ]
} )
export class UseritemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
