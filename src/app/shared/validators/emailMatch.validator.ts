import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailMatchValidator(path?:string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.get(path ?? 'email')?.value;
    const confirmEmail = control.get(path ?? 'confirmEmail')?.value;
    console.log(email, confirmEmail)

    if (email && confirmEmail && email !== confirmEmail) {
      
      control.get(path ?? 'confirmEmail')?.setErrors({ emailMismatch: true })
      return {emailMismatch: true}

    }
    return null;
  };
}