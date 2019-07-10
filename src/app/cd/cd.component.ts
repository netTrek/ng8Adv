import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
