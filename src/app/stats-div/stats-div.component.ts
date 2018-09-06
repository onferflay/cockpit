import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=datafortable&cid=1533').subscribe(data => {
	this.testme = data.data;
	this.order = data.orderby
	this.wday = data.days["wday"].split(',');
	this.wdate = data.days["wdate"].split(',');
 });
  }

  GiveClass(i:string) : string{
  		if ( i > 0 ){
  			return 'bgpink';
      }
  		else{
  			if (i == 0){
  				return "";
        }
  			else{
  				return 'bggoluboi';
        }
      }
  }

}
