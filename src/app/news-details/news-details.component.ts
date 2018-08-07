import { Component, OnInit, Input } from '@angular/core';
import { NewsDivComponent } from '../news-div/news-div.component';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})




export class NewsDetailsComponent implements OnInit {

@Input() nid: number;

eventHide() : void{
	this.nid = 0;
}

  constructor() { }

  ngOnInit() {
  }

}
