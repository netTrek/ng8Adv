import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'msg-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  count$: Observable<number>;

  constructor( private store$: StoreService ) {
    this.count$ = this.store$.pipe ( map ( value => value.count ) );
  }

  ngOnInit() {
  }

}
