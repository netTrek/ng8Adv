import { Component } from '@angular/core';
import { IntervalRunner } from '../../interval-runner';

@Component({
  selector: 'nt-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent extends IntervalRunner {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
