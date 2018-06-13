import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const API_URL = 'http://localhost:3400/api'; 

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService implements CanActivate{

  constructor(private http: HttpClient,
  				) { }
  getProfileData() {
        return this.http.get(API_URL+ '/getUserDetails');
    },
  login(user:any){
  	console.log(user)
  	let data ={userName:user.userName,password:user.password}
  	return this.http.get(API_URL+ "/login?userName="+data.userName+"&password="+data.password);
  } 

}
