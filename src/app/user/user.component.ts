import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() { }

  ngOnInit() {
  }

  chgName() {
    this.name = this.name === 'Saban Ünlü' ?  'Peter Müller' : 'Saban Ünlü';
  }
}
