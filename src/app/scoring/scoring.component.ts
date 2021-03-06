import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SharableService } from "../sharable.service";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  @Input() colors : string[] = ['#ffffff','#37475a'];
  @Input() score : string = 'Procurement Scoring';

  constructor(private http: HttpClient,private vano: SharableService, private route: ActivatedRoute) { }

  results : any;
  empty : any = true;
  active: any;
  acolor:any;
  sdelete: boolean;
  co :number;
  colorbg:string = '#ffffff';
  colorf:string = '#37475a';
  ckid : string;
  vscoresection : boolean;


  ngOnInit() {

    this.route.queryParamMap.subscribe(params =>{
      this.ckid = params.get("ckid");
    });

 	this.http.get('http://www.marketpricesolutions.com/apitest.asp?act=getscoringdata&cid=' + this.ckid).subscribe(data => {

	      this.results = data;
        this.co = 4;

        if ( $.isEmptyObject(data) ) { this.empty = false; }

        this.vano.active.subscribe(acolor => this.acolor = acolor);
        this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);
        this.vano.vscoresection.subscribe(aux => this.vscoresection = aux );

        this.vano.colorbg.subscribe(bgc => this.colorbg = bgc);
        this.vano.colorf.subscribe(fc => this.colorf = fc);
	 });
}

onSubmit(){
  this.active = false;
  this.vano.changeActive(false);
  this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editscoring&type=0&scoringname='+ encodeURI(this.score) +'&ckid=' + this.ckid,{
    headers: {
      "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
    }}).subscribe();
  }


  verify(){
    if (this.score.length < 4) { this.score = 'Procurement Scoring' }
  }

  offMe(){
    this.vano.changeActive(this.acolor);
    this.vano.changeCO(4);
    this.colorbg = this.colors[0];
    this.colorf = this.colors[1];
    this.vano.changeAuxColorBg(this.colorbg);
    this.vano.changeAuxColorF(this.colorf);
  }
}
