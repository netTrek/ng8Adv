import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserIconComponent } from './user-icon/user-icon.component';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent
  implements OnInit, AfterContentInit {

  @ContentChild ( UserIconComponent,
    {static: true})
  icon: UserIconComponent;
  constructor() { }

  ngOnInit() {
    console.log ( '#1', this.icon );
  }

  ngAfterContentInit(): void {
    console.log ( '#2', this.icon );
  }

}
