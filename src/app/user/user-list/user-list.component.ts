import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  userList: User[] = [];

  constructor() { }

  ngOnInit() {
  }

}
