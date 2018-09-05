import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-hedge-div',
  templateUrl: './hedge-div.component.html',
  styleUrls: ['./hedge-div.component.css']
})
export class HedgeDivComponent implements OnInit {

  constructor(private http: HttpClient) { }

	results : string[];
	chart : Chart;

	ngOnInit(): void {
	 	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=gethedgedata&cid=1533').subscribe(data => {
		this.results = data;
		console.log(this.results);
	 });
	}


ShowMeTheChart(fixed : number) : Chart{
	this.chart = new Chart(<any>{
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            type: 'solidgauge',
            margin: [0, 0, 0, 0],
            backgroundColor: 'transparent',
            plotShadow: false
        },
        exporting: { enabled: false },
        credits: {enabled: false},
        title: {
            text: parseInt(fixed) + '%',
            align: 'center',
            verticalAlign: 'middle',
            y: 8,
            style: {
                        fontWeight: 'bold',
                        fontSize: '29px',
                        color: 'white',
                        fontFamily: 'Open Sans, sans-serif'
                    }
        },
        yAxis: {
                  labels: {
                          enabled: false
                   },
                  min: 0,
                  max: 100,
                  lineWidth: 0,
                  tickWidth: 0,
                  minorTickLength: 0
        },
        tooltip: {
            pointFormat: `{series.name}: <b>{point.y:.2f}%</b>`
        },
        pane: {
             size: '65%',
             center: ['50%', '50%'],
             startAngle: 0,
             endAngle: 360,
             background: {
             borderWidth: 0,
             backgroundColor: '#37475a',
             shape: 'arc',
                 outerRadius: '0%',
                 innerRadius: '80%'
             }
         },
        plotOptions: {
             solidgauge: {
                borderColor: '#ffa82c',
                borderWidth: 12,
                radius: 90,
                innerRadius: '90%',
                dataLabels: {
                            y:60,
                            borderWidth: 0,
                            useHTML: true,
                            format: `<b></b>`
                }
            }
        },
        series: [{
            type: `solidgauge`,
            name: `Fixed`,
            data: [parseInt(fixed)]
   }]
  });
	return this.chart;
}

}
