import { Component, OnInit } from '@angular/core';
import { ReversePipe } from '../shared/reverse.pipe';

@Component({
  selector: 'dvz-pipe-samples',
  templateUrl: './pipe-samples.component.html',
  styleUrls: ['./pipe-samples.component.scss']
})
export class PipeSamplesComponent implements OnInit {

  num = Math.PI;
  price = 9.99;
  str = 'Saban';
  now = Date.now();

  constructor( reverse: ReversePipe ) {
    console.log ( reverse.transform( 'hello world') );
  }

  ngOnInit() {
  }

}
