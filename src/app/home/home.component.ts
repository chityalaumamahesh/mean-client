import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileArray:any =[];
  public dashboardData: any = [];
  constructor(private userData: DataService, private authService: AuthService) { }

  ngOnInit() {
  	this.profleData();
    this.dashboard();
  }
  profleData(){
  	this.userData.getProfileData().subscribe(
  		data => {this.profileArray = data},
  		err => console.log(err),	
  		() => console.log('done loading profile details')
  	)
  }
  dashboard(){
    this.userData.getDashboard().subscribe(
      data=> {this.dashboardData = data},
      err =>console.log(err),
      ()=> console.log('done loading dashboard');
    )
  }
  logout(){
    this.authService.logout();
  }

}
