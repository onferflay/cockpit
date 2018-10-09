import { Input, Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharableService } from "../sharable.service";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };


@Component({
  selector: 'app-stats-div',
  templateUrl: './stats-div.component.html',
  styleUrls: ['./stats-div.component.css']
})

export class StatsDivComponent implements OnInit {

@Input() check:any;

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
  colors : string[] = ['#ffffff','#37475a'];

  constructor(private http: HttpClient,private vano: SharableService) { }

  ngOnInit() {
	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=datafortable&cid=1533').subscribe(data => {
	this.testme = data["data"];
	this.order = data["orderby"];
  this.wday = data["days"]["wday"].split(',');
  this.wdate = data["days"]["wdate"].split(',');
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

  this.vano.colorBg1.subscribe(bgc => this.colors[0] = bgc);
  this.vano.colorFont1.subscribe(fc => this.colors[1] = fc);

  $(document).keyup(function(e){
    if (e.keyCode === 27 ){
    $('.news_edit,#fancybox-overlay').hide();
    $('#settodefault').click();
    }
  });
  }

  filterOf(nr:number){
    return this.testme.filter(x => x.uid == nr);
  }


  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(1);
  }
  offMee(){
    this.vano.changeDel(this.sdelete);
  }

onSubmit(){
  return this.http.post('http://www.marketpricesolutions.com/apitest.asp', this.editn,httpOptions).
  subscribe(data => 
    {alert(data);},
     error => 
     {alert("Error");}
    );
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
