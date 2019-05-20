import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharableService } from '../sharable.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-weekly-div',
  templateUrl: './weekly-div.component.html',
  styleUrls: ['./weekly-div.component.css']
})
export class WeeklyDivComponent implements OnInit {


  @Input() weekly : string = 'LAST WEEK AT A GLANCE';
  @Input() colors : string[] = ['#ffffff','#37475a'];

  constructor(private http:HttpClient, private vano:SharableService,private route:ActivatedRoute) { }

  active: any;
  ckid: string;
  results : any;
  co : number;
  colorbg: string = '#ffffff';
  colorf: string = '#37475a';
  acolor: any;
  vweeklysection : boolean;

  ngOnInit() {
    this.active = false;
    this.route.queryParamMap.subscribe(params =>{
      this.ckid = params.get("ckid");
    });
    

    this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=weeklyreport').subscribe(data => {

      this.results = data;

      this.co = 7;
      this.vano.active.subscribe(acolor => this.acolor = acolor);
      this.vano.vweeklysection.subscribe(aux => this.vweeklysection = aux );
      this.vano.colorbg.subscribe(bgc => this.colorbg = bgc);
      this.vano.colorf.subscribe(fc => this.colorf = fc);
    });

  }

  verify(){
    if (this.weekly.length < 4) { this.weekly = 'LAST WEEK AT A GLANCE' }
  }

  onSubmit(){
    this.active = false;
    this.vano.changeActive(false);
    this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editweekly&type=0&weeklyname='+ encodeURI(this.weekly) +'&ckid=' + this.ckid,{
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
      }}).subscribe();

    }

  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(7);
    this.colorbg = this.colors[0];
    this.colorf = this.colors[1];
    this.vano.changeAuxColorBg(this.colorbg);
    this.vano.changeAuxColorF(this.colorf);
  }

}
