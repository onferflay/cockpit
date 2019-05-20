import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries,chartData } from '../news';
import * as Highcharts from 'highcharts';
import { SharableService } from "../sharable.service";
import { ActivatedRoute } from "@angular/router";


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-market-prices',
  templateUrl: './market-prices.component.html',
  styleUrls: ['./market-prices.component.css']
})

export class MarketPricesComponent implements OnInit {


  @Input() mpt : string = 'Market Prices & Trends';
  @Input() colors : string[] = ['#ffffff','#37475a'];

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
    co :number;
    colorbg:string = '#ffffff';
    colorf:string = '#37475a';
    auxname:string;
    ckid : string;
    achart : boolean;
    vmarketsection : boolean;

    constructor(private http: HttpClient, private vano: SharableService,private route: ActivatedRoute) { }

  ngOnInit() {
  this.active = false;
  this.route.queryParamMap.subscribe(params => { this.ckid = params.get("ckid")});
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=dataforchart&cid=' + this.ckid).subscribe(data => {
	this.charts = data[0];
  this.objKeys = Object.keys(this.charts);
  this.co =2;

  this.vano.active.subscribe(acolor => this.acolor = acolor);
  this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);
  this.vano.achart.subscribe(achart => this.achart = achart );
  this.vano.vmarketsection.subscribe(aux => this.vmarketsection = aux );

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

  showchart(){
    this.achart = !this.achart;
    this.vano.changeChart(this.achart);
  }



  verify(){
    if (this.mpt.length < 4) { this.mpt = 'Market Prices & Trends' }
  }

  onSubmit(){
    this.active = false;
    this.vano.changeActive(false);
    this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editmarkets&type=0&marketsname='+ encodeURI(this.mpt) +'&ckid=' + this.ckid,{
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
      }}).subscribe();
  
    }

  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(2);
    this.colorbg = this.colors[0];
    this.colorf = this.colors[1];
    this.vano.changeAuxColorBg(this.colorbg);
    this.vano.changeAuxColorF(this.colorf);
  }

}





