import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  sendToken(token) {
  	console.log('logged in user',token)
    localStorage.setItem("LoggedInUser", JSON.stringify(token);
    localStorage.setItem("AuthToken", token.token);
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.router.navigate(["login"]);
  }

}
