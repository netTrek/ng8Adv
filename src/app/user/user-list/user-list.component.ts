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

  @ViewChild ('firstname', {static: true } )
  firstnameInput: ElementRef<HTMLInputElement>;

  @ViewChild ('lastname', {static: true } )
  lastnameInput: ElementRef<HTMLInputElement>;

  @ViewChildren ( UserListItemComponent )
  userItems: QueryList<UserListItemComponent>;
  selectedUser: User;
  userList$: Observable<User[]> = this.$userStore.select('userList' );
  private sub: Subscription = new Subscription();

  constructor( public $user: UserService,
               public $userStore: UserStoreService ) {

    // $user.getUserByID( 1 ).subscribe(
    //   next => console.log ( next )
    // );
  }

  ngOnInit() {
  }

  selectUser( userToSelect: User ) {
    // this.selectedUser = userToSelect;
    this.selectedUser =
      this.selectedUser === userToSelect ?
      undefined :
      userToSelect;

    this.updateSelection ();
    this.updateInputFields ();
  }

  private updateInputFields() {
    if ( !!this.selectedUser ) {
      this.firstnameInput.nativeElement.value = this.selectedUser.firstname;
      this.lastnameInput.nativeElement.value  = this.selectedUser.lastname;
    } else {
      this.firstnameInput.nativeElement.value =
      this.lastnameInput.nativeElement.value = '';
    }
  }

  private updateSelection() {
    if ( !! this.userItems ) {
      this.userItems.forEach (
        item => item.isSelected = this.selectedUser && (item.user.id === this.selectedUser.id)
      );
    }
  }

  ngAfterViewInit(): void {
    this.sub.add (
      this.userItems.changes.subscribe(
        next => window.setTimeout( () => {
          this.updateSelection();
        } , 1 ) // console.log( next )
      )
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  addUser(  ) {
    const firstname: HTMLInputElement = this.firstnameInput.nativeElement;
    const lastname: HTMLInputElement = this.lastnameInput.nativeElement;
    this.$user.addUser ( {
      firstname: firstname.value,
      lastname: lastname.value } )
      .subscribe(
        next => {
          firstname.value = lastname.value = '';
        }
      );
  }

  delSelected( selectedUser: User ) {
    this.$user.delSelected( selectedUser );
    this.selectedUser = undefined;
    this.updateInputFields ();

  }

  editUser() {
    const firstname: HTMLInputElement = this.firstnameInput.nativeElement;
    const lastname: HTMLInputElement = this.lastnameInput.nativeElement;
    this.$user.updateUser( {
        ...this.selectedUser,
        firstname: firstname.value,
        lastname : lastname.value
      }
    )
      .subscribe( user => this.selectedUser = user )
    ;
  }
}
