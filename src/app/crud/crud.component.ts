import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  

  constructor(private crud: CrudService) { }
  public usrArr:any =[];
  public model:any ={};
  public msg: any;
  public msg1: any;
  public id: String;
  ngOnInit() {
  	this.loadAllUsers();
  };

  loadAllUsers(){
    this.crud.read().subscribe(res =>{this.usrArr = res},err =>{console.log(err)});
    console.log("userDetails",this.usrArr);
  }
  submit(){
   this.crud.create(this.model).subscribe(res => {this.msg1=res;this.loadAllUsers();})
   
  }
  delete(id){
    this.crud.delete(id).subscribe(res=> {this.msg = res}
    );
    this.loadAllUsers();
  }
  edit(data){
    console.log("edit data",data);
    this.model.firstName= data.firstName;
    this.model.lastName= data.lastName;
    this.model.userName= data.userName;
    this.model.password = data.password;
  }
  getById(id){
    console.log(id);
    this.crud.readByid(id).subscribe(res=>{this.msg = res});
  }
}
