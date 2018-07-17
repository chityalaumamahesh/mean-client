import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3400/api'; 
var token = localStorage.getItem('AuthToken');
const httpOptions = {
    headers: new HttpHeaders({ 'x-access-token': token})
};

@Injectable()
export class DataService implements CanActivate{

  constructor(private http: HttpClient,
  				) { }
  getDashboard() {
        console.log('auth token',token);
        return this.http.get(API_URL+ '/home',httpOptions);
    };        
  getProfileData() {
        console.log('auth token',token);
        return this.http.get(API_URL+ '/getUserDetails',httpOptions);
    };
   register(regObj){
      return this.http.post(API_URL+ '/register',regObj)
   };
  login(user:any){
  	console.log(user)
  	let data ={userName:user.userName,password:user.password}
  	return this.http.get(API_URL+ "/authenticate?userName="+data.userName+"&password="+data.password);
  }; 

}
