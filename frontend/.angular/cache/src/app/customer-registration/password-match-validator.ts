import { AbstractControl, FormGroup } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    console.log('password:', password);
    console.log('confirmPassword:', confirmPassword);
  
    if (password?.value !== confirmPassword?.value) {
      console.log('Passwords do not match');
      return { passwordMismatch: true };
    }
  
    console.log('Passwords match');
    return null;
}