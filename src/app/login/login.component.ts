import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username = '';
  private password = '';
  private user = {};
  private isLoggedIn: boolean;


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    const object = {
      'about' : null,
      'created': null,
      'delay': null,
      'id': this.username,
      'password' : this.password,
      'karma': null,
      'submitted': null
    };

    this.authService.login(object).subscribe(response => {
      this.user = response;
    }, err => alert('Something went wrong. Try again!'), () => localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn = true)));
  }
}
