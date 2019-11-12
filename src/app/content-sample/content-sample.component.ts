import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { CountdownComponent } from '../utils/countdown/countdown.component';

@Component({
  selector: 'rp-content-sample',
  templateUrl: './content-sample.component.html',
  styleUrls: ['./content-sample.component.scss']
})
export class ContentSampleComponent implements OnInit, AfterContentInit {

  @ContentChild ( CountdownComponent, { static: false } )
  firstCountDown: CountdownComponent;

  @ContentChildren ( CountdownComponent )
  countDowns: QueryList<CountdownComponent>;

  @ContentChild ( CountdownComponent, { static: false, read: ElementRef } )
  firstCountDownElem: ElementRef<CountdownComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log ( this.firstCountDown, this.firstCountDownElem );
    this.firstCountDown.stopInterval();
    console.log ( this.countDowns, this.countDowns.toArray() );
    // TODO Subscribe to changes
  }

}
