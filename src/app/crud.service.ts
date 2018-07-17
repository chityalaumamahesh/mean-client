import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {map } from 'rxjs/operators';


const API_URL = 'http://localhost:3400/api';
@Injectable()
export class CrudService {

  constructor(private http: HttpClient) { }
  read(){
  	return this.http.get(API_URL+'/user');
  }
  readByid(id:String){
  	return this.http.get(API_URL+'/user/'+id);
  }
  create(saveObj){
    return this.http.post(API_URL+'/register',saveObj)
  }
  delete(id:String){
  	return this.http.delete(API_URL+'/user/'+id);

  }
 

}
