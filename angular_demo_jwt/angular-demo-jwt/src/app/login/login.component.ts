import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {TokenStorageService} from '../service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const {username, password} = this.form;
    this.authService.login(username, password).subscribe(value => {
      this.tokenStorageService.saveToken(value.accessToken);
      this.tokenStorageService.saveUser(value);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      this.reloadPage();
    }, error => {
      this.errorMessage = error.error.message;
      this.isLoginFailed = true;
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
