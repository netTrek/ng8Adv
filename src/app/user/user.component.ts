import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayWithMe } from './play-with-me';

@Component({
  selector: 'nt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor( public play: PlayWithMe ) { }

  ngOnInit() {
  }

  chgName() {
    this.name = this.name === 'Saban Ünlü' ?  'Peter Müller' : 'Saban Ünlü';
  }
}
