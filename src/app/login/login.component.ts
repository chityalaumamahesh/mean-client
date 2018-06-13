import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Observable} from 'rxjs/Rx';
import {Router} from "@angular/router";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public userData: any = {};	
   public model: any ={};
  constructor(private loginService: DataService, private router:Router) { }

  ngOnInit() {
  }
  login(this.model){
  	console.log("login ",this.model)
  	this.loginService.login(this.model)
  	.subscribe(
  		user =>{
  			 if (user && user.token) {
	  			this.userData = user;
	  			localStorage.setItem('currentUser', JSON.stringify(user));
	  			console.log("response",user);
	  			console.log("userDetails",this.userData.data);
	  			 this.router.navigate(['home']);
  			  }
  		}
  	) 	
  }	
}
