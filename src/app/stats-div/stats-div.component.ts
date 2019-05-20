import { Input, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharableService } from "../sharable.service";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stats-div',
  templateUrl: './stats-div.component.html',
  styleUrls: ['./stats-div.component.css']
})

export class StatsDivComponent implements OnInit {

@Input() check:any;
@Input() colors : string[] = ['#ffffff','#37475a'];
@Input() stats:string = 'Statistics';

	testme: string[];
  order: string;
  wday: string;
  wdate: string;
  active: boolean;
  acolor: boolean;
  sdelete: boolean;
  editn: any;
  action : any;
  enrglist : string[] = ["power","gas","coal","emissions","oil","rates","others"];
  uid : any = 0;
  auxstring : string[] = [];
  co:number;
  colorbg:string = '#ffffff';
  colorf:string = '#37475a';
  ckid : string;
  vstatssection : boolean;

  constructor(private http: HttpClient,private vano: SharableService,private route:ActivatedRoute) { }

  ngOnInit() {

  this.route.queryParamMap.subscribe(params =>{
    this.ckid = params.get("ckid");
  });
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=datafortable&cid=' + this.ckid ).subscribe(data => {
	this.testme = data["data"];
	this.order = data["orderby"];
  this.wday = data["days"]["wday"].split(',');
  this.wdate = data["days"]["wdate"].split(',');
  this.co =1;
  data["data"].forEach(x => {
    if (x.uid > this.uid)
    {
      this.uid = x.uid;
      this.auxstring.push(x.uid);
    }
  });
 });

  this.active = false;
  this.vano.active.subscribe(acolor => this.acolor = acolor);
  this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);
  this.vano.vstatssection.subscribe(aux => this.vstatssection = aux );
  this.vano.colorbg.subscribe(bgc => this.colorbg = bgc);
  this.vano.colorf.subscribe(fc => this.colorf = fc);
  }

  filterOf(nr:number){
    return this.testme.filter(x => x["uid"] == nr);
  }

  verify(){
    if (this.stats.length < 4) { this.stats = 'Statistics' }
  }

  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(1);
    this.colorbg = this.colors[0];
    this.colorf = this.colors[1];
    this.vano.changeAuxColorBg(this.colorbg);
    this.vano.changeAuxColorF(this.colorf);
  }
  
onSubmit(){
  this.active = false;
  this.vano.changeActive(false);
  this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editstats&type=0&statsname='+ encodeURI(this.stats) +'&ckid='+ this.ckid,{
    headers: {
      "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
    }}).subscribe();

  }
  
  GiveClass(i:any) : string{
  		if ( i > 0 ){
  			return 'bgpink';
      }
  		else{
  			if (i == 0){
  				return "";
        }
  			else{
  				return 'bggoluboi';
        }
      }
  }

}
