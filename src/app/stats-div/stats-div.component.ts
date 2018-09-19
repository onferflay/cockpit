import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharableService } from "../sharable.service";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

@Component({
  selector: 'app-stats-div',
  templateUrl: './stats-div.component.html',
  styleUrls: ['./stats-div.component.css']
})



export class StatsDivComponent implements OnInit {


	testme: string[];
  order: string;
  wday: string;
  wdate: string;
  active: boolean;
  acolor: boolean;
  sdelete: boolean;

  constructor(private http: HttpClient,private vano: SharableService) { }

  ngOnInit() {
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=datafortable&cid=1533').subscribe(data => {
	this.testme = data.data;
	this.order = data.orderby
  this.active = false;
	this.wday = data.days["wday"].split(',');
	this.wdate = data.days["wdate"].split(',');
  this.vano.active.subscribe(acolor => this.acolor = acolor);
  this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);
 });

  $(document).keyup(function(e){
    if (e.keyCode === 27 ){
    $('.news_edit,#fancybox-overlay').hide();
    $('#settodefault').click();
    }
  });

  }


  offMe(){
    this.vano.changeActive(this.acolor);
  }
  offMee(){
    this.vano.changeDel(this.sdelete);
  }

onSubmit(){
  return this.http.post('http://www.marketpricesolutions.com/apitest.asp', this.editn,httpOptions).
  subscribe(data => 
    {alert(data);},
     error => 
     {alert("Error");}
    );
  }
  
  GiveClass(i:string) : string{
  		if ( i.length() > 0 ){
  			return 'bgpink';
      }
  		else{
  			if (i.length() == 0){
  				return "";
        }
  			else{
  				return 'bggoluboi';
        }
      }
  }

}
