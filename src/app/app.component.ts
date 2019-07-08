import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'msg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msg19';
  userList: User[] = [
    {age: 1, name: 'peter' },
    {age: 2, name: 'heike' },
    {age: 3, name: 'frank' }
  ];

  constructor() {

  }
}
