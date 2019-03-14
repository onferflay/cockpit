import { Component, OnInit, Input } from '@angular/core';
import { SharableService } from "../sharable.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.css']
})
export class ColorSchemeComponent implements OnInit {

  @Input() active: boolean; 
  @Input() colorBG:string; 
  @Input() colorFont:string;
  @Input() co:number;

  cmon : boolean;

  constructor(private http: HttpClient,private vano: SharableService){}

  ngOnInit(){
  	this.vano.active.subscribe(cmon => this.cmon = cmon);
    this.vano.colorFont.subscribe(fc => this.colorFont = fc);
    this.vano.colorBg.subscribe(bgc => this.colorBG = bgc);
    this.vano.colorFont1.subscribe(fc => this.colorFont = fc);
    this.vano.colorBg1.subscribe(bgc => this.colorBG = bgc);
  }

  onSubmit(){
    this.active = false;
		this.vano.changeActive(false);
    if (this.co == 0)
    {
    this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editnews&type=1&ckid=1533&bgcolor='+ this.colorBG +'&fcolor=' + this.colorFont,{
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
      }}).subscribe();
    }

  }

  changeColorBG(){
    if (this.co == 0)
      this.vano.changeColorBG(this.colorBG);
    else if (this.co == 1) 
      this.vano.changeColorBG1(this.colorBG);
    else if (this.co == 2) 
      this.vano.changeColorBG2(this.colorBG);
    else if (this.co == 3) 
      this.vano.changeColorBG3(this.colorBG);
    else if (this.co == 4) 
      this.vano.changeColorBG4(this.colorBG);
  }

  changeColorF(){
    if (this.co == 0)
      this.vano.changeColorF(this.colorFont);
    else if (this.co == 1)
      this.vano.changeColorF1(this.colorFont);
    else if (this.co == 2)
      this.vano.changeColorF2(this.colorFont);
    else if (this.co == 3)
      this.vano.changeColorF3(this.colorFont);
    else if (this.co == 4)
      this.vano.changeColorF4(this.colorFont);
  }
   
  offMe(){
  	this.vano.changeActive(this.cmon);
  }

}
