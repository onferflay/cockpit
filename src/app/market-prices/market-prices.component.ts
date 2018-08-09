import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-market-prices',
  templateUrl: './market-prices.component.html',
  styleUrls: ['./market-prices.component.css']
})
export class MarketPricesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  	charts : string[];

  ngOnInit() {
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=dataforchart&cid=1533').subscribe(data => {
	this.charts = data;
	console.log(this.charts);
 });
  }

}
