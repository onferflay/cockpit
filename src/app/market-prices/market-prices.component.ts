import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries,chartData } from '../news';
import * as Highcharts from 'highcharts';
import { SharableService } from "../sharable.service";


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-market-prices',
  templateUrl: './market-prices.component.html',
  styleUrls: ['./market-prices.component.css']
})

export class MarketPricesComponent implements OnInit {
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
    sdelete: boolean;
    ajax: any;
    acolor:any;
    action: any;
    colors : string[] = ['#ffffff','#37475a'];
    co :number;
    colorbg:string = '#ffffff';
    colorf:string = '#37475a';
    mpt : string = 'Market Prices & Trends';
    auxname:string;

    sukaa : number = 0;

    constructor(private http: HttpClient, private vano: SharableService) { }

  ngOnInit() {
  this.active = false;
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=dataforchart&cid=1533').subscribe(data => {
	this.charts = data[0];
  this.objKeys = Object.keys(this.charts);

  this.co =2;

  this.vano.active.subscribe(acolor => this.acolor = acolor);
  this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);

  this.vano.colorBg2.subscribe(bgc => this.colors[0] = bgc);
  this.vano.colorFont2.subscribe(fc => this.colors[1] = fc);

  this.vano.colorbg.subscribe(bgc => this.colorbg = bgc);
  this.vano.colorf.subscribe(fc => this.colorf = fc);

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

  verify(){
    if (this.mpt.length < 4) { this.mpt = 'Market Prices & Trends' }
  }

  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(2);
    this.colorbg = this.colors[0];
    this.colorf = this.colors[1];
    this.vano.changeAuxColorBg(this.colorbg);
    this.vano.changeAuxColorF(this.colorf);
  }
  offMee(){
    this.vano.changeDel(this.sdelete);
  }

  // privet(){
  //   this.sukaa = this.sukaa + 1;
  //   this.ajax = this.ajax + this.sukaa;
  //   console.log(this.ajax);
  // }
}





