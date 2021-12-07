import {AbstractControl, ValidationErrors} from '@angular/forms';

export function gte(control: AbstractControl): ValidationErrors | null {
  const v = control.value;
  if (isNaN(v)) {
    return {gte: true};
  }
  if (v <= 0) {
    return {gte: true};
  }
  return null;
}
