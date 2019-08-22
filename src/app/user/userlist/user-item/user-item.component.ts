import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'dvz-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
