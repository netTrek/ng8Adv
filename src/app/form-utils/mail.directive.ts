import { Directive, ExistingProvider, forwardRef } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import { MsgMailAsyncValidator, MsgMailValidator, MsgMailValidatorAsync } from './msg-mail-validator';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
// ng generate module formUtils --module temp-driven
// ng generate class formUtils/MsgMailValidator --skip-tests
// ng generate directive formUtils/mail --skip-tests --export
@Directive({
  selector: '[ngModel][msgMail],[formControl][msgMail],[formControlName][msgMail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef( () => MailDirective )
    } as ExistingProvider
  ]
})
export class MailDirective implements Validator {

  constructor() { }

  registerOnValidatorChange( fn: () => void ): void {
  }

  validate( control: AbstractControl ): ValidationErrors | null {
    const emailErr: ValidationErrors | null = Validators.email( control );
    const msgMailErr: ValidationErrors | null = MsgMailValidator.msgMail( control );
    if ( !! msgMailErr && !! emailErr ) {
      return { ...msgMailErr, ...emailErr };
    }
    if ( !! msgMailErr ) {
      return msgMailErr;
    } else {
      return emailErr;
    }
    return null;
  }

}
@Directive({
  selector: '[ngModel][msgAsyncMail],[formControl][msgAsyncMail],[formControlName][msgAsyncMail]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      multi: true,
      useExisting: forwardRef( () => MailAsyncDirective )
    } as ExistingProvider
  ]
})
export class MailAsyncDirective implements AsyncValidator {

  constructor() { }

  registerOnValidatorChange( fn: () => void ): void {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // return MsgMailValidatorAsync.msgMail( control );
    const emailErr: ValidationErrors | null = Validators.email( control );
    const msgMailErr: Observable<ValidationErrors | null>
            = MsgMailAsyncValidator.msgMail( control ) as Observable<ValidationErrors | null>;
    return msgMailErr.pipe (
      first(),
      map<ValidationErrors | null, ValidationErrors | null>(value => {
        if ( !! value && !! emailErr ) {
          return  { ...value, ...emailErr } ;
        }
        if ( !! value ) {
          return value ;
        } else if ( !! emailErr ) {
          return emailErr;
        }
        return null;
      })
    );
  }

}
