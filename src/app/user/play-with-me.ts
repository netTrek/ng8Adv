import { BehaviorSubject } from 'rxjs';

export class PlayWithMe extends BehaviorSubject<number> {
  constructor() {
    super ( undefined );
  }
  update( val ) {
    this.next( val );
  }
}
