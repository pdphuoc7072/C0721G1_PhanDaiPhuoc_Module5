import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-name-card';
  currentNameCard = 'ABCDSER';
  currentEmail = 'abc123@gmail.com';
  currentPhone = '0122456789';
}
