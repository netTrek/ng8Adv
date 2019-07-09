import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user';
import { MyService } from '../../di-samples/my-service';
import { Subscription } from 'rxjs';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ],
  providers: [MyService]
} )
export class UserListComponent implements OnInit, OnDestroy {

  @Input ()
  userList: User[] = [];
  selectedUsr: User;
  private sub: Subscription;

  // selectedUsr: User;

  constructor( public $myService: MyService ) {
    this.sub = $myService.selectedUsr$
              .subscribe( value => this.selectedUsr = value );
  }

  ngOnInit() {
  }

  setSelectedUser( usr: User ) {
    if ( this.$myService.selectedUsr$.getValue() !== usr ) {
      this.$myService.selectedUsr$.next( usr );
    } else if ( this.$myService.selectedUsr$.getValue() === usr ) {
      this.$myService.selectedUsr$.next( undefined );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
