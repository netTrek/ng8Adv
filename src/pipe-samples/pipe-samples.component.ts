import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'nt-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls  : [ './pipe-samples.component.scss' ]
} )
export class PipeSamplesComponent implements OnInit {

  num  = Math.PI;
  str  = 'Saban Ünlü';
  date = new Date ();

  constructor() {
  }

  ngOnInit() {
  }

}
