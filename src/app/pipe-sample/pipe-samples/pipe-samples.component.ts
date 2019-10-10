import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvz-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls: ['./pipe-samples.component.scss']
})
export class PipeSamplesComponent implements OnInit {

  num = Math.PI;
  date = new Date();
  str = 'Saban Ünlü';
  price = 3.3;


  constructor() { }

  ngOnInit() {
  }

}
