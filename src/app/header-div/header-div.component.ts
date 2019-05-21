import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SharableService } from '../sharable.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})


export class HeaderDivComponent implements OnInit {
  active:string;
  cookieValue : string;
  
  name : string[]=["Market News","Statistics","Market Prices","Hedges","Consolidated","Top Consolidate","Scoring","Library","Weekly Report"];
  checked : boolean[]=[true,true,true,true,true,true,true,true,true];
  order : number[]=[1,2,3,4,5,6,7,8,9];

  constructor( private cookieService: CookieService, private vano:SharableService ) { }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.name, event.previousIndex, event.currentIndex);
    moveItemInArray(this.checked, event.previousIndex, event.currentIndex);
    moveItemInArray(this.order, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {

    this.vano.vnewssection.subscribe(aux => this.checked[0] = aux );
    this.vano.vstatssection.subscribe(aux => this.checked[1] = aux );
    this.vano.vmarketsection.subscribe(aux => this.checked[2] = aux );
    this.vano.vhedgesection.subscribe(aux => this.checked[3] = aux );
    this.vano.vconssection.subscribe(aux => this.checked[4] = aux );
    this.vano.vtopconsection.subscribe(aux => this.checked[5] = aux );
    this.vano.vscoresection.subscribe(aux => this.checked[6] = aux );
    this.vano.vlibsection.subscribe(aux => this.checked[7] = aux );
    this.vano.vweeklysection.subscribe(aux => this.checked[8] = aux );

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
        
   
  $(function(){	
    $('#select-section').click(function(){

        if ( $(this).find('.fa-chevron-right').length > 0 )
        {
            $('.fa-chevron-right').removeClass('fa-chevron-right').addClass('fa-chevron-left');
            $('.small-menu-div').css({'left':'0'});
            $('#select-section i').css({'left':'440px'});
            $('#select-section').css({'left':'-220px','width':'500px'});
        }
        else
        {
            $('.fa-chevron-left').removeClass('fa-chevron-left').addClass('fa-chevron-right');
            $('.small-menu-div').css({'left':'-200px'});
            $('#select-section i').css({'left':'240px'});
            $('#select-section').css({'left':'-225px','width':'300px'});
        }
    })
  });

  }

  change(nr){
    switch(nr){
      case 1: this.checked[0] = !this.checked[0]; this.vano.changeNewsSection(this.checked[0]); break;
      case 2: this.checked[1] = !this.checked[1]; this.vano.changeStatsSection(this.checked[1]); break;
      case 3: this.checked[2] = !this.checked[2]; this.vano.changeMarketSection(this.checked[2]); break;
      case 4: this.checked[3] = !this.checked[3]; this.vano.changeHedgeSection(this.checked[3]); break;
      case 7: this.checked[6] = !this.checked[6]; this.vano.changeScoreSection(this.checked[6]); break;
      case 5: this.checked[4] = !this.checked[4]; this.vano.changeConsSection(this.checked[4]); break;
      case 6: this.checked[5] = !this.checked[5]; this.vano.changeTopConsSection(this.checked[5]); break;
      case 8: this.checked[7] = !this.checked[7]; this.vano.changeLibSection(this.checked[7]); break;
      case 9: this.checked[8] = !this.checked[8]; this.vano.changeWeeklySection(this.checked[8]); break;
    }
  }

  jump(){
      $('html, body').animate({ scrollTop: $("#"+this.active).offset().top}, 2000);
  }
}
