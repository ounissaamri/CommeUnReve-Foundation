import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.get('personalInfoFormGroup.email')?.value;
    const confirmEmail = control.get('personalInfoFormGroup.confirmEmail')?.value;
    console.log(email, confirmEmail)

    if (email && confirmEmail && email !== confirmEmail) {
      
      // return { emailMismatch: true };
      control.get('personalInfoFormGroup.confirmEmail')?.setErrors({ emailMismatch: true })
      return {}

    }
    return null;
  };
}