import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from './gte.validator';

function passwordMatch(control: AbstractControl) {
  const v = control.value;
  return (v.password === v.confirmPassword) ? null : {passwordNotMatch: true};
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordGroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, {validators: passwordMatch}),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [gte]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  });
  countryList = [
    {id: 1, name: 'Vietnam'},
    {id: 2, name: 'Japan'},
    {id: 3, name: 'China'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(registerForm: FormGroup) {
    console.log(registerForm.value);
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get(['passwordGroup', 'password']);
  }
  get confirmPassword() {
    return this.registerForm.get(['passwordGroup', 'confirmPassword']);
  }
  get passwordGroup() {
    return this.registerForm.get('passwordGroup');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get age() {
    return this.registerForm.get('age');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
}
