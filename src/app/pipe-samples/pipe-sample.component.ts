import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.scss']
})
export class PipeSampleComponent implements OnInit {

  currentDate = new Date ();
  price = 123123.12242;
  num = Math.PI;
  myName = 'Saban';

  constructor() { }

  ngOnInit() {
  }

}
