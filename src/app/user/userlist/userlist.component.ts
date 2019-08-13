import { Component, OnInit } from '@angular/core';

/*
ng generate component userlist --skip-tests
 */

@Component({
  selector: 'ba-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
