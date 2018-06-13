import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-regitster',
  templateUrl: './regitster.component.html',
  styleUrls: ['./regitster.component.css']
})
export class RegitsterComponent implements OnInit {
	model:any ={};
	msg: String;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  register(){
  		this.dataService.register(this.model).subscribe(data => this.msg = data; this.model = {})
  }
}
