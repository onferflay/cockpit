import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})
export class HeaderDivComponent implements OnInit {

	test : any;
  constructor() { }

  ngOnInit() {
  	this.test = false;
  }
  privet(){
  	this.test = !this.test;
  	console.log(this.test);
  }

}
