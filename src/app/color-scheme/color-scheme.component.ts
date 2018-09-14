import { Component, OnInit, Input } from '@angular/core';
import { SharableService } from "../sharable.service";
@Component({
  selector: 'app-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.css']
})
export class ColorSchemeComponent implements OnInit {

  @Input() active: boolean;

  cmon : boolean;



  constructor(private vano: SharableService){}

  ngOnInit(){
  	this.cmon = true;
  	this.vano.active.subscribe(cmon => this.cmon = cmon);
  	console.log(this.cmon)
  }

  offMe(){
  	console.log(this.cmon)
  	this.vano.changeActive(this.cmon);
  }

}
