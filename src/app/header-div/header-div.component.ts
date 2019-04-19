import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})

export class HeaderDivComponent implements OnInit {
  active:string;
  cookieValue : string;

  constructor( private cookieService: CookieService ) { }

  ngOnInit() {
        // this.cookieService.set( 'Test', 'Hello World');
        // this.cookieService.set( 'empck', '0');
        // this.cookieValue = this.cookieService.get('Test');
        // localStorage.setItem('UserGroup', '515');
        // localStorage.setItem('UserID', '512315');
        // localStorage.setItem('Vano', '515aa');
        // let myItem = localStorage.length;
        // for ( let i = 0; i < myItem; i++)
        // {
        //   console.log(localStorage.key(i) + ' = ' + localStorage.getItem(localStorage.key(i)));
        // }


        
  }

  jump(){
      $('html, body').animate({ scrollTop: $("#"+this.active).offset().top}, 2000);
  }
}
