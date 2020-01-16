import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { IntervalRunner } from '../interval-runner';

@Component({
  selector: 'nt-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent extends IntervalRunner {

  constructor( private cdr: ChangeDetectorRef ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  updateVal () {
    super.updateVal ();
    if ( this.val % 3 === 0 ) {
      // this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
  }

}
