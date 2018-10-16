import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries,chartData } from '../news';
import * as Highcharts from 'highcharts';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
	this.dateFrom.setDate(this.dateFrom.getDate() - 365);
  	this.dateFrom = this.dateToDMY(this.dateFrom);
  	this.dateTo = this.dateToDMY(this.dateTo);
  }

  drawChart(from,to){
  	this.dateFrom = from;
  	this.dateTo = to;
  	console.log(this.dateFrom);
  	console.log(this.dateTo);
  }

dateToDMY(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '/' + (m <= 9 ? '0' + m : m) + '/' + y;
}

}
