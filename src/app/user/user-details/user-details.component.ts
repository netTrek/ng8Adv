import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component ( {
  selector   : 'dvz-user-details',
  templateUrl: './user-details.component.html',
  styleUrls  : [ './user-details.component.scss' ]
} )
export class UserDetailsComponent implements OnInit {

  id: number;

  constructor( private $route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.$route.paramMap
        .pipe (
          map ( paramMap => paramMap.get ( 'id' ) )
        )
        .subscribe ( value => this.id = Number ( value ) );
  }

}
