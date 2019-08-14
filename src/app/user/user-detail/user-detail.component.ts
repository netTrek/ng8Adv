import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'ba-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: number;
  user: User;

  constructor( private $route: ActivatedRoute,
               private $router: Router,
               private $user: UserService ) { }

  ngOnInit() {
    console.log ( 'init details' );
    this.$route.paramMap.pipe(
      map( value => value.get( 'id' ) )
    )
        .subscribe( value => {
          this.id = Number (value);
          this.$user.getUserByID ( this.id ).subscribe(
            user => this.user = user
          );
        } );
  }

  next() {
    this.$router.navigate( ['user', this.id + 1] );
  }
}
