import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries } from '../news';

@Component({
  selector: 'app-chartdata',
  templateUrl: './chartdata.component.html',
  styleUrls: ['./chartdata.component.css']
})


export class ChartdataComponent implements OnInit {


@Input() takeMe: string;
		 linedata : ChartSeries = new ChartSeries;
		 curba : ChartSeries[] = new Array<ChartSeries>();
		 chart : Chart;
		 ttt : Date[] = new Array<Date>();

  constructor(private http: HttpClient) { }

  ngOnInit() {

     this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=getdataforchart&cid=' + this.takeMe).subscribe(data =>{
		// console.log(this.takeMe);

	for ( let vano of data){
	  		this.linedata.name = vano.ln;
	  		for (let hehe of vano.data){
	  			this.ttt.push(Date.UTC(2018,3,15,0));
	  			this.ttt.push(Date.UTC(2018,3,16,0));
	  			this.ttt.push(Date.UTC(2018,3,17,0));
	  		}
      		// this.linedata.data = vano.data;
	      	console.log(this.ttt);
	      	this.curba.push(this.linedata);
	        }
	        // console.log(this.curba[0].name);

 	this.chart = new Chart({
    title: { text: '' },

    yAxis: { title: { text: 'EUR/MWh' } },

    series: this.curba

});
     });
  }
}


// 		console.log(data);

// for ( let vano of data){
//   		this.linedata.name = vano.ln;
//       	this.linedata.data = vano.data;
//       	this.curba.push(this.linedata);
  //       }
  //       console.log(this.curba);


  //           this.chart = new Chart({
  //               chart: {
  //                   height: 370,
  //                   zoomType: 'x',
  //                   borderColor: '#fff',
  //                   borderRadius: 0, 
  //                   plotBorderColor: '#000000',
  //                   plotBackgroundColor: '#F2F2F2',
  //                   plotBorderWidth: 0,
  //                   borderWidth: 0,
  //                   margin: [43, 30, 105, 63],
  //                   defaultSeriesType: 'line'
  //               },
  //               title: {text: 'asdasdaq', style:{ textAlign:'right', fontSize:'14px', fontWeight:'bold', color:'#7F7F7F'}, margin:'0'},
  //               colors: ['#70AD47', '#AFABAB', '#5B9BD5', '#ED7D31', '#4472C4', '#FFD966'],
  //               xAxis: {
  //                   gridLineWidth: 0,
  //                   type: 'datetime',
  //   maxZoom: 7 * 24 * 3600000
  //               },
  //               tooltip: {
  //                   formatter: function() {
  //                       return '<b>'+ this.series.name +'</b><br> Date: ' +
  //                           Chart.dateFormat('%B %e, %Y', this.x) + ' <br> ' +
  //                           'Value: ' + Chart.numberFormat(this.y, 2);
  //                   },
  //                   backgroundColor:'rgba(255,255,255, .05)', shadow:false, borderWidth:0, style: { fontSize: '10px', color:'#000'}
  //               },
  //                 toolbar: {itemStyle:{color: '#4572A7',fontSize:'9pt',cursor:'pointer',position:'relative',left:'150px',top:'4px',margin:'0'}},
  //               legend: {enabled: true, style:{ position:'absolute', left:'20px', width:'100%'}, itemStyle:{font:'13px Arial, sans-serif',color:'#7F7F7F'}},
  //                 plotOptions:{line:{lineWidth:2,states:{hover:{lineWidth:2}},marker:{enabled: false,states:{hover:{enabled:true,symbol:'circle',radius:5,lineWidth:1,fillColor:'#bcdc27'}}}}},
  // yAxis: {title: {text : 'EUR/MWh'}, gridLineWidth:1,gridLineColor:'#D0CECE'},
  //               credits: {enabled: false},
  //               series: this.curba
  //               });
  //     })

  // }
