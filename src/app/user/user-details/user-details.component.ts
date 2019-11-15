import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user-service';
import { User } from '../user';

@Component({
  selector: 'rp-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor( private route: ActivatedRoute, private $user: UserService ) { }

  ngOnInit() {
    this.route.paramMap
        .pipe(
          map( paramMap => parseInt( paramMap.get ( 'id' ), 10 ) )
        )
        .subscribe( next => {
          this.$user.getUserByID( next )
              .subscribe( user => this.user = user );
        } );
  }

}
