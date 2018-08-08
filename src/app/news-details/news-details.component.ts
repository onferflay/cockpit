import { Component, OnInit, Input } from '@angular/core';
import { NewsDivComponent } from '../news-div/news-div.component';
import { News } from '../news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})




export class NewsDetailsComponent implements OnInit {

@Input() nid: News;

eventHide() : void{
	this.nid = null;
}

  constructor() { }

  ngOnInit() {
  }

}
