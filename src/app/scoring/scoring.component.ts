import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  constructor(private http: HttpClient) { }

  results : any;
  empty : any = true;

  ngOnInit() {
 	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=getscoringdata&cid=1533').subscribe(data => {
	this.results = data;
	 });
 	if ( $.isEmptyObject(this.results) ) { this.empty = false; }
  }

}
