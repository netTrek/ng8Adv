import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rp-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls: ['./pipe-samples.component.scss']
})
export class PipeSamplesComponent implements OnInit {

  testStr = 'Ich bin ein Test String';
  testNum = Math.PI;
  testDate = new Date();


  constructor() { }

  ngOnInit() {
  }

}
