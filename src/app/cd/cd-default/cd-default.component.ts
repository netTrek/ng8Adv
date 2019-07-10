import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CdService } from '../cd.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'msg-cd-default',
  templateUrl: './cd-default.component.html',
  styleUrls: ['./cd-default.component.scss'],
  providers: [CdService]
})
export class CdDefaultComponent implements OnInit, OnDestroy {

  num !: number;
  private sub: Subscription;
  constructor( private $cd: CdService, private cdr: ChangeDetectorRef ) {
  }

  ngOnInit() {
    this.sub = this.$cd.countTo().subscribe( v => {
      this.num = v;
      if ( v === 5 ) {
        this.cdr.detach();
      }
    } );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
