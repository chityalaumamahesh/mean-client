import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
  	  		console.log("profile data",this.profileArray)

  }

}
