import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})

export class HeaderDivComponent implements OnInit {
  active:string;

  constructor() { }

  ngOnInit() {}

  jump(){
      $('html, body').animate({ scrollTop: $("#"+this.active).offset().top}, 2000);
  }
}
