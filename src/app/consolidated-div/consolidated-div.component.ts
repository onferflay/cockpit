import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SharableService } from "../sharable.service";

@Component({
  selector: 'app-consolidated-div',
  templateUrl: './consolidated-div.component.html',
  styleUrls: ['./consolidated-div.component.css']
})
export class ConsolidatedDivComponent implements OnInit {

  @Input() cons : string = 'Consolidated Reports';
  @Input() colors : string[] = ['#ffffff','#37475a'];

  constructor(private http: HttpClient,private vano: SharableService) { }

	results : any;
	chart : Chart[] = new Array<Chart>();
  empty : any = true;
  active: any;
  acolor:any;
  sdelete: boolean;
  co :number;
  colorbg:string = '#ffffff';
  colorf:string = '#37475a';
  vanoo : any;

	ngOnInit(){
        this.active = false;
 	      this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=getconsdata&cid=1533').subscribe(data => {

            this.results = data;

            if ( $.isEmptyObject(data) ) { this.empty = false; }

            this.co =5;
    
            this.vano.active.subscribe(acolor => this.acolor = acolor);
            this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);
            
            this.vano.colorbg.subscribe(bgc => this.colorbg = bgc);
            this.vano.colorf.subscribe(fc => this.colorf = fc);

            let i = 0;

            this.results.forEach(kek =>{
                this.chart[i] = new Chart(<any>{
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
                          text: parseInt(kek["fixed"]) + '%',
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
                              borderColor: '#0060A8',
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
                          data: [parseInt(kek["fixed"])]
                 }]
                });

                i++;

});
      
	   });

	}


  verify(){
    if (this.cons.length < 4) { this.cons = 'Consolidated Reports' }
  }

  onSubmit(){
    this.active = false;
    this.vano.changeActive(false);
    this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editcons&type=0&consname='+ encodeURI(this.cons) +'&ckid=1533',{
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
      }}).subscribe();

    }

  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(5);
    this.colorbg = this.colors[0];
    this.colorf = this.colors[1];
    this.vano.changeAuxColorBg(this.colorbg);
    this.vano.changeAuxColorF(this.colorf);
  }
  offMee(){
    this.vano.changeDel(this.sdelete);
  }

}