import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';


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
    ids : string[] = [];
    objKeys :{};
    chart : Chart;

  ngOnInit() {
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=dataforchart&cid=1533').subscribe(data => {
	this.charts = data[0];
  this.objKeys = Object.keys(this.charts);
  console.log(data);

  for (let vano  of this.objKeys){
    let aux = "";
    for ( let index of data[0][vano] ){
      aux += index.id + ","
    }
    aux = aux.substring(0,aux.length-1);
    this.ids.push(aux);
  }

 let i = 0;

  for (let vano of this.ids){
    // console.log(i++);
      // this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=getdataforchart&cid=' + vano).subscribe(data => {
      //   console.log(i);
      // })

  }

 });
  }

}




//     var alarm0= [
//         [Date.UTC(2018,7,6),60],
//         [Date.UTC(2018,8,5),60],
//         ];
//     var alarm1= [
//         [Date.UTC(2018,7,6),50],
//         [Date.UTC(2018,8,5),50],
//         ];
//  var data95 = [
// [Date.UTC(2018,3,9,0),35.65],[Date.UTC(2018,3,10,0),33.25],[Date.UTC(2018,3,11,0),28.38],[Date.UTC(2018,3,12,0),37.25],[Date.UTC(2018,3,13,0),32.74],[Date.UTC(2018,3,14,0),28.4],[Date.UTC(2018,3,15,0),44.52],[Date.UTC(2018,3,16,0),44.1],[Date.UTC(2018,3,17,0),40.9],[Date.UTC(2018,3,18,0),38.9],[Date.UTC(2018,3,19,0),38.46],[Date.UTC(2018,3,20,0),31.75],[Date.UTC(2018,3,23,0),34.46],[Date.UTC(2018,3,24,0),28.6],[Date.UTC(2018,3,25,0),31.24],[Date.UTC(2018,3,26,0),37.93],[Date.UTC(2018,3,27,0),29.98],[Date.UTC(2018,3,28,0),21.51],[Date.UTC(2018,3,29,0),21],[Date.UTC(2018,3,30,0),38.77],[Date.UTC(2018,4,1,0),9.12],[Date.UTC(2018,4,2,0),41.03],[Date.UTC(2018,4,3,0),39.47],[Date.UTC(2018,4,4,0),27.3],[Date.UTC(2018,4,5,0),17.22],[Date.UTC(2018,4,6,0),34.6],[Date.UTC(2018,4,7,0),30.85],[Date.UTC(2018,4,8,0),36.1],[Date.UTC(2018,4,9,0),37],[Date.UTC(2018,4,10,0),21.5],[Date.UTC(2018,4,11,0),31.5],[Date.UTC(2018,4,12,0),15.73],[Date.UTC(2018,4,13,0),36.2],[Date.UTC(2018,4,14,0),40.06],[Date.UTC(2018,4,15,0),41.79],[Date.UTC(2018,4,16,0),35.75],[Date.UTC(2018,4,17,0),40.6],[Date.UTC(2018,4,18,0),36.03],[Date.UTC(2018,4,19,0),19.5],[Date.UTC(2018,4,20,0),5.5],[Date.UTC(2018,4,21,0),36.03],[Date.UTC(2018,4,22,0),42.55],[Date.UTC(2018,4,23,0),38.62],[Date.UTC(2018,4,24,0),39.45],[Date.UTC(2018,4,25,0),34.83],[Date.UTC(2018,4,26,0),23.94],[Date.UTC(2018,4,27,0),43.4],[Date.UTC(2018,4,28,0),43.45],[Date.UTC(2018,4,29,0),47.34],[Date.UTC(2018,4,30,0),41.97],[Date.UTC(2018,4,31,0),48.73],[Date.UTC(2018,5,1,0),41.2],[Date.UTC(2018,5,2,0),35.99],[Date.UTC(2018,5,3,0),48.62],[Date.UTC(2018,5,4,0),50.25],[Date.UTC(2018,5,5,0),51.87],[Date.UTC(2018,5,6,0),52.4],[Date.UTC(2018,5,7,0),51.1],[Date.UTC(2018,5,8,0),42],[Date.UTC(2018,5,9,0),34.57],[Date.UTC(2018,5,10,0),48.8],[Date.UTC(2018,5,11,0),49.1],[Date.UTC(2018,5,12,0),47.9],[Date.UTC(2018,5,13,0),44.65],[Date.UTC(2018,5,14,0),49.68],[Date.UTC(2018,5,15,0),40.3],[Date.UTC(2018,5,16,0),27.82],[Date.UTC(2018,5,17,0),44.63],[Date.UTC(2018,5,18,0),46.6],[Date.UTC(2018,5,19,0),45.68],[Date.UTC(2018,5,20,0),33.8],[Date.UTC(2018,5,21,0),24.13],[Date.UTC(2018,5,22,0),21.6],[Date.UTC(2018,5,23,0),27.1],[Date.UTC(2018,5,24,0),47.25],[Date.UTC(2018,5,25,0),49],[Date.UTC(2018,5,26,0),46.86],[Date.UTC(2018,5,27,0),45.62],[Date.UTC(2018,5,28,0),44.78],[Date.UTC(2018,5,29,0),38.79],[Date.UTC(2018,5,30,0),26.75],[Date.UTC(2018,6,1,0),48.3],[Date.UTC(2018,6,2,0),50.62],[Date.UTC(2018,6,3,0),54.24],[Date.UTC(2018,6,4,0),50],[Date.UTC(2018,6,5,0),45.67],[Date.UTC(2018,6,6,0),31.86],[Date.UTC(2018,6,7,0),31.94],[Date.UTC(2018,6,8,0),45.92],[Date.UTC(2018,6,9,0),54.07],[Date.UTC(2018,6,10,0),53.89],[Date.UTC(2018,6,11,0),53.3],[Date.UTC(2018,6,12,0),51.28],[Date.UTC(2018,6,13,0),47.06],[Date.UTC(2018,6,14,0),43.36],[Date.UTC(2018,6,15,0),54.7],[Date.UTC(2018,6,16,0),54.41],[Date.UTC(2018,6,17,0),49.91],[Date.UTC(2018,6,18,0),52.3],[Date.UTC(2018,6,19,0),53.67],[Date.UTC(2018,6,20,0),49.88],[Date.UTC(2018,6,21,0),45.32],[Date.UTC(2018,6,22,0),53.64],[Date.UTC(2018,6,23,0),56.25],[Date.UTC(2018,6,24,0),58.02],[Date.UTC(2018,6,25,0),55.41],[Date.UTC(2018,6,26,0),52.06],[Date.UTC(2018,6,27,0),45.5],[Date.UTC(2018,6,28,0),43.07],[Date.UTC(2018,6,29,0),55.5],[Date.UTC(2018,6,30,0),56.67],[Date.UTC(2018,6,31,0),57.2],[Date.UTC(2018,7,1,0),59.25],[Date.UTC(2018,7,2,0),62.73],[Date.UTC(2018,7,3,0),53.26],[Date.UTC(2018,7,4,0),44.5],[Date.UTC(2018,7,5,0),65],[Date.UTC(2018,7,6,0),63.53],[Date.UTC(2018,7,7,0),57.21],[Date.UTC(2018,7,8,0),57.4],[Date.UTC(2018,7,9,0),57.4]
//  ];
//  var data101 = [
// [Date.UTC(2018,3,9,0),44],[Date.UTC(2018,3,10,0),43.82],[Date.UTC(2018,3,11,0),47.95],[Date.UTC(2018,3,12,0),47.18],[Date.UTC(2018,3,13,0),37.77],[Date.UTC(2018,3,14,0),41.7],[Date.UTC(2018,3,15,0),46.63],[Date.UTC(2018,3,16,0),43.81],[Date.UTC(2018,3,17,0),41.43],[Date.UTC(2018,3,18,0),41.87],[Date.UTC(2018,3,19,0),41.52],[Date.UTC(2018,3,20,0),40.97],[Date.UTC(2018,3,21,0),19.98],[Date.UTC(2018,3,22,0),35.34],[Date.UTC(2018,3,23,0),37.58],[Date.UTC(2018,3,24,0),37.53],[Date.UTC(2018,3,25,0),34.31],[Date.UTC(2018,3,26,0),42.59],[Date.UTC(2018,3,27,0),38.3],[Date.UTC(2018,3,28,0),35.3],[Date.UTC(2018,3,29,0),21.32],[Date.UTC(2018,3,30,0),26.65],[Date.UTC(2018,4,1,0),41.69],[Date.UTC(2018,4,2,0),48.07],[Date.UTC(2018,4,3,0),46.87],[Date.UTC(2018,4,4,0),45.56],[Date.UTC(2018,4,5,0),34.65],[Date.UTC(2018,4,6,0),46.95],[Date.UTC(2018,4,7,0),45.34],[Date.UTC(2018,4,8,0),47.46],[Date.UTC(2018,4,9,0),36.38],[Date.UTC(2018,4,10,0),48.36],[Date.UTC(2018,4,11,0),35.21],[Date.UTC(2018,4,12,0),38.68],[Date.UTC(2018,4,13,0),35.9],[Date.UTC(2018,4,14,0),44.04],[Date.UTC(2018,4,15,0),42.65],[Date.UTC(2018,4,16,0),37.2],[Date.UTC(2018,4,17,0),50.58],[Date.UTC(2018,4,18,0),56.83],[Date.UTC(2018,4,19,17),19.97],[Date.UTC(2018,4,20,0),18.73],[Date.UTC(2018,4,21,0),52.13],[Date.UTC(2018,4,22,0),49.37],[Date.UTC(2018,4,23,0),47.01],[Date.UTC(2018,4,24,0),50.31],[Date.UTC(2018,4,25,0),41.72],[Date.UTC(2018,4,26,0),36.34],[Date.UTC(2018,4,27,0),64.81],[Date.UTC(2018,4,28,0),57.28],[Date.UTC(2018,4,29,0),66.07],[Date.UTC(2018,4,30,0),67.07],[Date.UTC(2018,4,31,0),66.6],[Date.UTC(2018,5,1,0),58.95],[Date.UTC(2018,5,2,0),58.2],[Date.UTC(2018,5,3,0),57.59],[Date.UTC(2018,5,4,0),56.78],[Date.UTC(2018,5,5,0),55.73],[Date.UTC(2018,5,6,0),56.31],[Date.UTC(2018,5,7,0),57.9],[Date.UTC(2018,5,8,0),51.08],[Date.UTC(2018,5,9,0),46.5],[Date.UTC(2018,5,10,0),56.04],[Date.UTC(2018,5,11,0),51.11],[Date.UTC(2018,5,12,0),49.73],[Date.UTC(2018,5,13,0),50.52],[Date.UTC(2018,5,14,0),56.46],[Date.UTC(2018,5,15,0),43.36],[Date.UTC(2018,5,16,0),27.98],[Date.UTC(2018,5,17,0),48.35],[Date.UTC(2018,5,18,0),52.41],[Date.UTC(2018,5,19,0),50.34],[Date.UTC(2018,5,20,0),43.03],[Date.UTC(2018,5,21,0),31.5],[Date.UTC(2018,5,22,0),33.11],[Date.UTC(2018,5,23,0),36.55],[Date.UTC(2018,5,24,0),49.92],[Date.UTC(2018,5,25,0),55.85],[Date.UTC(2018,5,26,0),51.87],[Date.UTC(2018,5,27,0),50.34],[Date.UTC(2018,5,28,0),49.58],[Date.UTC(2018,5,29,0),44.9],[Date.UTC(2018,5,30,0),32.03],[Date.UTC(2018,6,1,0),56.83],[Date.UTC(2018,6,2,0),60.86],[Date.UTC(2018,6,3,0),59.64],[Date.UTC(2018,6,4,0),58.51],[Date.UTC(2018,6,5,0),55.21],[Date.UTC(2018,6,6,0),54.26],[Date.UTC(2018,6,7,0),39.01],[Date.UTC(2018,6,8,0),56.07],[Date.UTC(2018,6,9,0),52.95],[Date.UTC(2018,6,10,0),52.7],[Date.UTC(2018,6,11,0),53.31],[Date.UTC(2018,6,12,0),51.97],[Date.UTC(2018,6,13,0),49.9],[Date.UTC(2018,6,14,0),47.21],[Date.UTC(2018,6,15,0),54.11],[Date.UTC(2018,6,16,0),52.14],[Date.UTC(2018,6,17,0),51.45],[Date.UTC(2018,6,18,0),51.8],[Date.UTC(2018,6,19,0),53.54],[Date.UTC(2018,6,20,0),50.55],[Date.UTC(2018,6,21,0),47.37],[Date.UTC(2018,6,22,0),55.12],[Date.UTC(2018,6,23,0),57.74],[Date.UTC(2018,6,24,0),59.81],[Date.UTC(2018,6,25,0),63.7],[Date.UTC(2018,6,26,0),58.42],[Date.UTC(2018,6,27,0),48.42],[Date.UTC(2018,6,28,0),44.87],[Date.UTC(2018,6,29,0),55.19],[Date.UTC(2018,6,30,0),56.33],[Date.UTC(2018,6,31,0),56.31],[Date.UTC(2018,7,1,0),59.54],[Date.UTC(2018,7,2,0),64.34],[Date.UTC(2018,7,3,0),51.5],[Date.UTC(2018,7,4,0),51.05],[Date.UTC(2018,7,5,0),63.77],[Date.UTC(2018,7,6,0),66.16],[Date.UTC(2018,7,7,0),56.76],[Date.UTC(2018,7,8,0),55.59]
//  ];
//             this.chart = new Chart({
//                 chart: {
//                     height: 370,
//                     zoomType: 'x',
//                     borderColor: '#fff',
//                     borderRadius: 0, 
//                     plotBorderColor: '#000000',
//                     plotBackgroundColor: '#F2F2F2',
//                     plotBorderWidth: 0,
//                     borderWidth: 0,
//                     margin: [43, 30, 105, 63],
//                 defaultSeriesType: 'line'
//                 },
//                 title: {text: 'asdasdaq', style:{ textAlign:'right', fontSize:'14px', fontWeight:'bold', color:'#7F7F7F'}, margin:'0'},
//                 colors: ['#70AD47', '#AFABAB', '#5B9BD5', '#ED7D31', '#4472C4', '#FFD966'],
//                 xAxis: {
//                     gridLineWidth: 0,
//                     type: 'datetime',
//     maxZoom: 7 * 24 * 3600000
//                 },
//                 tooltip: {
//                     formatter: function() {
//                         return '<b>'+ this.series.name +'</b><br> Date: ' +
//                             Chart.dateFormat('%B %e, %Y', this.x) + ' <br> ' +
//                             'Value: ' + Chart.numberFormat(this.y, 2);
//                     },
//                     backgroundColor:'rgba(255,255,255, .05)', shadow:false, borderWidth:0, style: { fontSize: '10px', color:'#000'}
//                 },
//                   toolbar: {itemStyle:{color: '#4572A7',fontSize:'9pt',cursor:'pointer',position:'relative',left:'150px',top:'4px',margin:'0'}},
//                 legend: {enabled: true, style:{ position:'absolute', left:'20px', width:'100%'}, itemStyle:{font:'13px Arial, sans-serif',color:'#7F7F7F'}},
//                   plotOptions:{line:{lineWidth:2,states:{hover:{lineWidth:2}},marker:{enabled: false,states:{hover:{enabled:true,symbol:'circle',radius:5,lineWidth:1,fillColor:'#bcdc27'}}}}},
//   yAxis: {title: {text : 'EUR/MWh'}, gridLineWidth:1,gridLineColor:'#D0CECE'},
//                 credits: {enabled: false},
//                 series: [
//  {name: 'AT spot base EUR/MWh',  data: data95},
//  {name: 'BE spot Eur/MWh',  data: data101}
//                 {
//                   lineWidth: 2,
//                   id : 'id0',
//                   name: 'vanoo',
//                   dashStyle: 'longdash',
//                   color: '#c42a2a',
//                   yAxis:0,
//                   data:alarm0
//                 },
//                 {
//                   lineWidth: 2,
//                   linkedTo: 'id0',
//                   showInLegend: false,
//                   dashStyle: 'longdash',
//                   name: 'vanoo',
//                   color: '#c42a2a',
//                   yAxis:0,
//                   data:alarm1 
//                 },
//  ]
//                 });
