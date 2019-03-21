import { Component, OnInit, Input } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})

export class HeaderDivComponent implements OnInit {
	test : any;
  active:string;
  constructor() { }

  ngOnInit() {
    this.active = "newssection";
  }

  jump(){
      $('html, body').animate({ scrollTop: $("#"+this.active).offset().top}, 2000);
  }
}
