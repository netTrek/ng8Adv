import { /*ChangeDetectorRef, ChangeDetectionStrategy,*/ Component } from '@angular/core';
import { IntervalRunner } from '../../interval-runner';

@Component({
  selector: 'nt-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent extends IntervalRunner {

  constructor( /* private cdr: ChangeDetectorRef */ ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  clicked () {
    console.log ( 'clicked' );
  }

  // updateVal () {
  //   super.updateVal ();
  //   if ( this.val % 3 === 0 ) {
  //     this.cdr.markForCheck();
  //   }
  // }
}
