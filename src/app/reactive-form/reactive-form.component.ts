import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MsgMailAsyncValidator } from '../form-utils/msg-mail-validator';

@Component({
  selector: 'msg-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  email: FormControl;

  constructor( private fb: FormBuilder ) {
    this.myForm = this.fb.group(
      {	name: [ 'Saban', Validators.required ],
        credentials: this.fb.group (
          {
            email: ['us@netTrek.de', [ Validators.email, Validators.required], MsgMailAsyncValidator.msgMail ],
            password: ['test1234', Validators.required ],
            serial: ['test1234', Validators.required ]
          })
      });
    this.email = this.myForm.get ( ['credentials', 'email'] ) as FormControl;
  }

  ngOnInit() {
  }

  sent() {
    console.log( this.myForm.value );
  }
}
