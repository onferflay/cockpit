import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries,chartData } from '../news';
import * as Highcharts from 'highcharts';
import { Observable, of } from 'rxjs';
import { SharableService } from "../sharable.service";

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.css']
})


export class ChartDetailComponent implements OnInit {


@Input() takeMe:string;
@Input() title: string;

	dateFrom: any = new Date();
  dateTo: any = new Date();
  
  achart : boolean;
  rdr : boolean;

  constructor(private http: HttpClient, private vano: SharableService)  { }

  ngOnInit() {
	  this.dateFrom.setDate(this.dateFrom.getDate() - 365);
  	this.dateFrom = this.dateToDMY(this.dateFrom);
    this.dateTo = this.dateToDMY(this.dateTo);

    // show chart 
    this.vano.achart.subscribe(tt => this.achart = tt);

    // redrow chart
    this.vano.crd.subscribe(tt => this.rdr = tt );
  }

hidechart(){
  this.achart = !this.achart; 
  this.vano.changeChart(this.achart);
}

drawChart(){
    this.rdr = true;
    $('#charthere #vano').click();
    this.vano.redrawChart(this.rdr);
  }

  downloadXls()  {
    let df = (this.dateFrom.split("/"))[2] + '-' + (this.dateFrom.split("/"))[1] + '-' + (this.dateFrom.split("/"))[0];
    let dt = (this.dateTo.split("/"))[2] + '-' + (this.dateTo.split("/"))[1] + '-' + (this.dateTo.split("/"))[0];
    this.http.get('https://www.energymarketprice.com/EMPUsers.asp?act=CPExportExcelSChart&Market_ID_List='+ this.takeMe +'&EDateFrom='+ df +'&EDateTo='+ dt +'&UserID=0').subscribe();
  }

dateToDMY(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
}

}
