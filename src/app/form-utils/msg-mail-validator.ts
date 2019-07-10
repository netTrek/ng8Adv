// ng generate module formUtils --module temp-driven
// ng generate class formUtils/MsgMailValidator --skip-tests
// ng generate directive formUtils/mail --skip-tests --export


import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class MsgMailValidator {
  static readonly msgMail: ValidatorFn = ( control: AbstractControl ): ValidationErrors | null => {
    if ( control.value === null || control.value === '') {
      return null;
    }
    return /\@msg\.group$/i.test( control.value ) ? null : { msgMail: true };
  }
}

export class MsgMailAsyncValidator {
  static readonly msgMail: AsyncValidatorFn =
                    ( control: AbstractControl ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    if ( control.value === null || control.value === '') {
      return of (null );
    }
    const outputVal = /\@msg\.group$/i.test( control.value ) ? null : { msgMail: true };
    return of ( outputVal ).pipe( delay( 1500 ) );
  }
}

export class MsgMailValidatorAsync {
  static readonly msgMail: AsyncValidatorFn =
                    ( control: AbstractControl ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
                      if ( control.value === null ) {
                        return of ( null );
                      }
                      const obs = /\@msg\.group$/i.test ( control.value ) ? of( null ) : of ( { msgMail: true } );
                      return obs.pipe( delay( 500 ) );
                    }
}
