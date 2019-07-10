import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { CdService } from '../cd.service';
import { Subscription } from 'rxjs';

@Component ( {
  selector       : 'msg-cd-push',
  templateUrl    : './cd-push.component.html',
  styleUrls      : [ './cd-push.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers      : [ CdService ]
} )
export class CdPushComponent implements OnInit, OnDestroy {

  num = 0;
  private sub: Subscription;

  constructor( private $cd: CdService, private cdr: ChangeDetectorRef ) {
  }

  ngOnInit() {
    this.sub = this.$cd.countTo ()
                   .subscribe ( v => {
                     this.num = v;
                     this.cdr.detectChanges(); // diese Ebene und Kinder
                     // this.cdr.markForCheck(); // falls Eltern Push -> Elter und alle kinder
                   } );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe ();
  }

  @HostListener ( 'click' )
  up() {
    ++ this.num;
  }
}
