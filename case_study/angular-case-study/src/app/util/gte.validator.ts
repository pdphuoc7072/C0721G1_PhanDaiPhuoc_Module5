import {AbstractControl, ValidationErrors} from '@angular/forms';

export function gte(control: AbstractControl): ValidationErrors | null {
  const v = control.value;
  if (isNaN(v)) {
    return {nan: true};
  }
  if (v <= 0) {
    return {zero: true};
  }
  return null;
}
