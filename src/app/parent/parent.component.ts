import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IntervalRunner } from '../interval-runner';

@Component({
  selector: 'nt-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent extends IntervalRunner {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
