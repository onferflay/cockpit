import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import { ChartSeries,chartData } from '../news';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chartdata',
  templateUrl: './chartdata.component.html',
  styleUrls: ['./chartdata.component.css']
})


export class ChartdataComponent implements OnInit {


@Input() takeMe: string;
linedata: ChartSeries = new ChartSeries;
curba: ChartSeries[] = new Array<ChartSeries>();
chart: Chart = new Chart;
cd: chartData = new chartData;
unit: string[] = [];
cur: string[] = [];
colors:string[] =[];
saxis: boolean = false;
acolors : string[] = ['#70AD47', '#AFABAB', '#5B9BD5', '#ED7D31', '#4472C4', '#FFD966'];


  constructor(private http: HttpClient) { }

  ngOnInit() {

 this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=getdataforchart&cid=' + this.takeMe)
 .subscribe(data =>{
  
  // console.log(this.takeMe);

  let i = 0;
  let n = 0;
  this.saxis = false;

  let results:any = data;

  // console.log(data);

	results.forEach(vano =>{

      if ( i == 0 )
      {
          this.unit[i] = vano['unit'];
          this.cur[i] = vano['cur'];
          this.colors[i] = '#4572A7';
          i++;
      }
      else
      {
          if ( (this.unit[i-1].toLowerCase() != vano['unit'].toLowerCase())  || (this.cur[i-1].toLowerCase() != vano['cur'].toLowerCase()) ) 
          {
            this.unit[i] = vano['unit'];
            this.cur[i] = vano['cur'];
            this.colors[i] = this.acolors[n];
            i++;
          }
      }

      n++;

      // console.log(i);

      if ( i > 1 ) { this.saxis = true; this.linedata.yAxis = 1; }
      else { this.linedata.yAxis = 0; }

      // console.log(vano);

      this.linedata.name = vano['name'];
      
      for (let hehe of vano['data'])
        {
            this.cd = new chartData;
            this.cd.x = Date.parse(hehe.date);
            this.cd.y = parseFloat(hehe.value);
            this.linedata.data.push(this.cd);
        }


    	this.curba.push(this.linedata);
      this.linedata = new ChartSeries;

      console.log(this.curba);
  })


  this.chart = new Chart(<any>{
              chart: {
                    // height: 400,
                    zoomType: 'x',
                    borderColor: '#fff',
                    borderRadius: 0, 
                    plotBorderColor: '#000000',
                    plotBackgroundColor: '#F2F2F2',
                    plotBorderWidth: 0,
                    borderWidth: 0,
                    margin: [43, 30, 105, 63],
                    defaultSeriesType: 'line'
                },
                exporting: { enabled: false },
                title: {text: '', style:{ textAlign:'right', fontSize:'14px', fontWeight:'bold', color:'#7F7F7F'}, margin:'0'},
                colors: this.acolors,
                xAxis: {
                    gridLineWidth: 0,
                    type: 'datetime',
    maxZoom: 7 * 24 * 3600000
                },
                tooltip: {
                    formatter: function() {
                        return '<b>'+ this.series.name +'</b><br> Date: ' +
                           Highcharts.dateFormat('%B %e, %Y', this.x) + ' <br> ' +
                            'Value: ' +  Highcharts.numberFormat(this.y, 2);
                    },
                    backgroundColor:'rgba(255,255,255, .05)', shadow:false, borderWidth:0, style: { fontSize: '10px', color:'#000'}
                },
                  toolbar: {itemStyle:{color: '#4572A7',fontSize:'9pt',cursor:'pointer',position:'relative',left:'150px',top:'4px',margin:'0'}},
                  legend: {enabled: true, borderColor: '#909090', borderWidth: 1, borderRadius: 5, style:{ position:'absolute', left:'20px', width:'100%'}, itemStyle:{font:'13px Arial, sans-serif',color:'#7F7F7F'}},
                  plotOptions:{line:{lineWidth:2,states:{hover:{lineWidth:2}},marker:{enabled: false,states:{hover:{enabled:true,symbol:'circle',radius:5,lineWidth:1,fillColor:'#bcdc27'}}}}},
  yAxis: [{
    title: {
      text : this.cur[0] +'/'+this.unit[0],
      style : { color: this.colors[0]}
    }, 
    labels:{
        x:-5,
        style : { color: this.colors[0]}
        },
    gridLineWidth:1,
  },{
    title: {
      text : this.cur[1] +'/'+this.unit[1],
      style : { color: this.colors[1]},
      x:-8
    },
    labels:{
          x:3,
          style : { color: this.colors[1]}
            }, 
    gridLineWidth:1,
    opposite:this.saxis
  }],


    credits: {enabled: false},
    series: this.curba

});      
});
  }
}

