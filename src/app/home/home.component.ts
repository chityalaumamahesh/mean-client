import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileArray:any =[];
  constructor(private userData: DataService) { }

  ngOnInit() {
  	this.profleData();
  }
  profleData(){
  	this.userData.getProfileData().subscribe(
  		data => {this.profileArray = data},
  		err => console.log(err),	
  		() => console.log('done loading profile details')
  	)
  }

}
