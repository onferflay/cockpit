import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries } from '../news';


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
    ids: string[] = [];
    wtfthis : string;
    objKeys :{};
    lines : any;
    chart : Chart;
    linedata : ChartSeries = new ChartSeries;
    curba: ChartSeries[] = new Array<ChartSeries>();
    href: any;
    active: any;
    ajax: any;

  ngOnInit() {
  this.active = false;
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=dataforchart&cid=1533').subscribe(data => {
	this.charts = data[0];
  this.objKeys = Object.keys(this.charts);
  let arr:any = this.objKeys;
  arr.forEach( vano => {
    let aux = "";
    for ( let index of data[0][vano] ){
      aux += index["id"] + ",";
    }
    aux = aux.substring(0,aux.length-1);
    this.ids.push(aux);
  })
 });
  }

  ajaxLoad(href){

    let ajax : any;
    let active : any;
    
    $.ajax({
      'method' : 'post',
      'url' : href,
      'dataType' : 'html',
      success : function(data){
        ajax = data;
        active = true;
      },
      error : function(){
        error('Error here!');
      }
    });

    // setTimeout(function(){
    // this.ajax = ajax;
    // this.active = active;
    // console.log(this.ajax);
    // console.log(this.active);
    // },1000);

  }

}





