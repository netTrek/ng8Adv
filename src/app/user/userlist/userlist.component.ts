import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'dvz-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  selectedInd: number;
  userList: User[] = [
    {firstname: 'Saban', lastname: 'Ünlü', age: 44},
    {firstname: 'Heike', lastname: 'Maier', age: 43},
    {firstname: 'Peter', lastname: 'Müller', age: 42}
  ];
  constructor() { }

  ngOnInit() {
  }

  setSelectedInd( val: number,
                  event?: MouseEvent) {
    this.selectedInd = val;
    console.log ( event );
  }
}
