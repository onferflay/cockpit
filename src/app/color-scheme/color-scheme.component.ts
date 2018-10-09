import { Component, OnInit, Input } from '@angular/core';
import { SharableService } from "../sharable.service";

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

  constructor(private vano: SharableService){}

  ngOnInit(){
  	this.vano.active.subscribe(cmon => this.cmon = cmon);
    this.vano.colorFont.subscribe(fc => this.colorFont = fc);
    this.vano.colorBg.subscribe(bgc => this.colorBG = bgc);
    this.vano.colorFont1.subscribe(fc => this.colorFont = fc);
    this.vano.colorBg1.subscribe(bgc => this.colorBG = bgc);
    console.log(this.co);
  }

  changeColorBG(){
    if (this.co == 0)
      this.vano.changeColorBG(this.colorBG);
    else if (this.co == 1) 
      this.vano.changeColorBG1(this.colorBG);
  }

  changeColorF(){
    if (this.co == 0)
      this.vano.changeColorF(this.colorFont);
    else if (this.co == 1)
      this.vano.changeColorF1(this.colorFont);
  }

  privet(){
      console.log(this.co)
    }
    
  offMe(){
  	this.vano.changeActive(this.cmon);
  }

}
