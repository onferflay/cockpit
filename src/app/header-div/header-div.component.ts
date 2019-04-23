import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SharableService } from '../sharable.service';

@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})

export class HeaderDivComponent implements OnInit {
  active:string;
  cookieValue : string;

  vnewssection : boolean;
  vstatssection : boolean;
  vmarketsection : boolean;
  vhedgesection : boolean;
  vscoresection : boolean;
  vlibsection : boolean;

  constructor( private cookieService: CookieService, private vano:SharableService ) { }

  ngOnInit() {
    this.vano.vnewssection.subscribe(aux => this.vnewssection = aux );
    this.vano.vstatssection.subscribe(aux => this.vstatssection = aux );
    this.vano.vmarketsection.subscribe(aux => this.vmarketsection = aux );
    this.vano.vhedgesection.subscribe(aux => this.vhedgesection = aux );
    this.vano.vscoresection.subscribe(aux => this.vscoresection = aux );
    this.vano.vlibsection.subscribe(aux => this.vlibsection = aux );

    console.log(this.vnewssection)
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
