import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { News,newsForm } from './news';
import { SharableService} from "./sharable.service";
import { HttpClient} from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'cockpit';
  ncolorbg : string;
  ncolorfont : string;
  ninfo : newsForm;
  sinfo : string;
  scolorbg : string;
  scolorfont : string;
  minfo : string;
  mcolorbg : string;
  mcolorfont : string;
  hinfo : string;
  hcolorbg : string;
  hcolorfont : string;
  scinfo : string;
  sccolorbg : string;
  sccolorfont : string;

  consinfo : string;
  conscolorbg : string;
  conscolorfont : string;

  topconsinfo : string;
  topconscolorbg : string;
  topconscolorfont : string;

  ckid : string;


  showinfo : boolean = false;
  constructor(private http: HttpClient,private vano: SharableService, private route: ActivatedRoute) { }

ngOnInit() {

  this.route.queryParamMap.pipe(debounceTime(100)).subscribe(params =>{
    this.ckid = params.get("ckid");

  this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=sendcockpit&ckid=' + this.ckid).subscribe( data =>{
    if (data) 
    {
      // for news start 
      this.vano.colorBg.subscribe(bgc => this.ncolorbg = bgc);
      this.vano.colorFont.subscribe(fc =>this.ncolorfont = fc);
      this.ncolorbg = data[0].bgcolor;
      this.ncolorfont = data[0].textcolor;
      this.ninfo = new newsForm(1533, data[0].name, data[0].newsnumber, data[0].newsfilter);

      // for statistics
      this.vano.colorBg1.subscribe(bgc => this.scolorbg = bgc);
      this.vano.colorFont1.subscribe(fc => this.scolorfont = fc);
      this.scolorbg = data[0].sbgcolor;
      this.scolorfont = data[0].stextcolor;
      this.sinfo = data[0].statsname;

      //for market-price
      this.vano.colorBg2.subscribe(bgc => this.mcolorbg = bgc);
      this.vano.colorFont2.subscribe(fc => this.mcolorfont = fc);
      this.mcolorbg = data[0].mbgcolor;
      this.mcolorfont = data[0].mtextcolor;
      this.minfo = data[0].marketsname;

      //for hedge reports
      this.vano.colorBg3.subscribe(bgc => this.hcolorbg = bgc);
      this.vano.colorFont3.subscribe(fc =>  this.hcolorfont = fc);
      this.hcolorbg = data[0].hbgcolor;
      this.hcolorfont = data[0].htextcolor;
      this.hinfo = data[0].hedgesname;

      //for consolidated report
      this.vano.colorBg5.subscribe(bgc => this.conscolorbg = bgc);
      this.vano.colorFont5.subscribe(fc =>  this.conscolorfont = fc);
      this.conscolorbg = data[0].consbgcolor;
      this.conscolorfont = data[0].constextcolor;
      this.consinfo = data[0].consname;

      //for topconsolidated report
      this.vano.colorBg6.subscribe(bgc => this.topconscolorbg = bgc);
      this.vano.colorFont6.subscribe(fc =>  this.topconscolorfont = fc);
      this.topconscolorbg = data[0].topconsbgcolor;
      this.topconscolorfont = data[0].topconstextcolor;
      this.topconsinfo = data[0].topconsname;

      //for scoring
      this.vano.colorBg4.subscribe(bgc => this.sccolorbg = bgc);
      this.vano.colorFont4.subscribe(fc => this.sccolorfont = fc);
      this.sccolorbg = data[0].scbgcolor;
      this.sccolorfont = data[0].sctextcolor;
      this.scinfo = data[0].scoringname;


      this.showinfo = true;


    }
    })
  });

	 	$(document).keyup(function(e){
            if (e.keyCode === 27 ){
        		$('.closeallbtn').click();
            }
  	 	});
  }
}
