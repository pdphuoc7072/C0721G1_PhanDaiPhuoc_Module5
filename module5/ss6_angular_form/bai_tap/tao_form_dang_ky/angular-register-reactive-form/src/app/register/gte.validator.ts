import {AbstractControl, ValidationErrors} from '@angular/forms';

export function gte(control: AbstractControl): ValidationErrors | null {
  const v =+ control.value;
  if (isNaN(v)) {
    return {gte: true, requiredValue: 18};
  }
  if (v <= 18) {
    return {gte: true, required: 18};
  }
  return null;
}
