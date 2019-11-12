import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  selectedClassName = 'selected underlined';
  selectedInd = -1;

  constructor() { }

  ngOnInit() {
  }

  selectInd( ind: number ) {
    // if ( ind === this.selectedInd ) {
    //   this.selectedInd = -1;
    // } else {
    //   this.selectedInd = ind;
    // }
    this.selectedInd = ind === this.selectedInd ? -1 : ind;
  }
}
