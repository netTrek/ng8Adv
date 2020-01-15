import { OnDestroy, OnInit } from '@angular/core';

export class IntervalRunner implements OnInit, OnDestroy {

  public val = 0;
  private intervalId: number|undefined;

  ngOnInit (): void {

    this.intervalId = window.setInterval(
      () => {
        this.updateVal();
      }, 100
    )

  }

  ngOnDestroy (): void {
    if ( !this.intervalId ) {
      window.clearInterval( this.intervalId );
      this.intervalId = undefined;
    }
  }

  updateVal () {
    this.val ++;
  }
}
