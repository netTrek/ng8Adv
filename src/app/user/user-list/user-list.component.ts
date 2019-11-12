import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { User } from '../user';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@Component({
  selector: 'rp-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  selectedClassName = 'selected underlined';


  @ViewChild ( 'rule', { static: true } )
  rule: ElementRef<HTMLHRElement>;

  @ViewChild ( UserListItemComponent, { static: false } )
  firstItem: UserListItemComponent;

  @ViewChildren ( UserListItemComponent )
  userItems: QueryList<UserListItemComponent>;

  userList: User[] =
    [
      {firstname: 'saban', lastname: 'uenlue'},
      {firstname: 'peter', lastname: 'mueller'}
    ];
  selectedUser: User;

  constructor( private elemRef: ElementRef, private renderer: Renderer2 ) {
    // console.log ( this.elemRef );
    // this.elemRef.nativeElement.style.borderColor = 'red';
    // this.elemRef.nativeElement.style.borderStyle = 'solid';
    // benutzt den Rednerer für SSR!
    // this.renderer.setStyle( this.elemRef.nativeElement, 'backgroundColor', 'red');
  }

  ngOnInit() {
    console.log ( '-...' , this.rule );
    this.renderer.setStyle( this.rule.nativeElement, 'borderColor', 'red');
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
    // lange Fassung für bessere Lesbarkeit
    // this.userItems.forEach(
    //   ( item ) => {
    //     item.isSelected = item.user === this.selectedUser;
    //   }
    // );
  }

  ngAfterViewInit(): void {
    console.log ( this.firstItem, this.userItems.toArray() );
    // setTimeout ( () => {
    //   this.firstItem.isSelected = true;
    // }, 1 );
  }
}
