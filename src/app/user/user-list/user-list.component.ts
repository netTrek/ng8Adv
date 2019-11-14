import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from '../user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../user-service';
import { UserStoreService } from '../user-store.service';

@Component({
  selector: 'rp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {

  selectedClassName = 'selected underlined';

  @ViewChildren ( UserListItemComponent )
  userItems: QueryList<UserListItemComponent>;
  selectedUser: User;
  userList$: Observable<User[]> = this.$userStore.select('userList' );
  private sub: Subscription = new Subscription();

  constructor( public $user: UserService,
               public $userStore: UserStoreService ) {
  }

  ngOnInit() {
  }

  selectUser( userToSelect: User ) {
    // this.selectedUser = userToSelect;
    this.selectedUser =
      this.selectedUser === userToSelect ?
      undefined :
      userToSelect;

    this.userItems.forEach(
      item => item.isSelected = item.user === this.selectedUser
    );
  }

  ngAfterViewInit(): void {
    this.sub.add (
      this.userItems.changes.subscribe(
        next => console.log( next )
      )
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
