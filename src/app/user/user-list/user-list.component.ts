import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user';
import { MyService } from '../../di-samples/my-service';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

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
  private sub2: Subscription;

  // selectedUsr: User;

  constructor( public $myService: MyService, public $user: UserService ) {
    this.sub = $myService.selectedUsr$
              .subscribe( value => this.selectedUsr = value );
    this.sub2 = $user.userList$.subscribe(  value => this.userList = value );
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
    this.sub2.unsubscribe();
  }

}
