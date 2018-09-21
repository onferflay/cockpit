import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News,newsForm } from '../news';
import { SharableService } from "../sharable.service";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-news-div',
  templateUrl: './news-div.component.html',
  styleUrls: ['./news-div.component.css']
})

export class NewsDivComponent implements OnInit {

	results : any;
	text: string[];
	stiri : News;
	img : string;
	title: string;
	active : boolean;
	editn : newsForm;
	clist : string[];
	acolor: boolean;
	sdelete: boolean;
	action : any;
   
	constructor(private http: HttpClient,private vano: SharableService) { }

	ngOnInit(){

		this.active = false;
		this.clist = ["All categories","Daily","Oil","Natural Gas","Power","Energy","Nuclear","Coal","Economics","Renewables"]
		this.editn = new newsForm(1, 'Market News', 4, [false,false,false,false,false,false,false,false,false,false]);
		this.vano.active.subscribe(acolor => this.acolor = acolor);
		this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);

     	$(document).keyup(function(e){
            if (e.keyCode === 27 ){
        		$('.news_edit,#fancybox-overlay').hide();
        		$('#settodefault').click();
            }
  	 	});


	 	this.http.get('http://149.56.102.173:80/api/v1/latest/validated/').subscribe(data => {
		this.results = data;
		this.results = this.results.slice(0,4);
	 });



	}

	offMe(){
		this.vano.changeActive(this.acolor);
	}
	offMee(){
		this.vano.changeDel(this.sdelete);
	}
	
	ShowMe(id: News): void{
		this.stiri = {
				title: id["title"],
				id: id["id"],
				created: id["created"],
				source: id["source"]["title"],
				validated_text : id["validated_text"]
			}
	}
	
	get diagnostic() { return JSON.stringify(this.editn); }
	
	SwitchMe(query: string): string {
		if (/power|electricity|wind|solar|nuclear|energy/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/power.png';
			this.title = 'power';
			return "dpower";
		}
		else if (/oil|gasoline/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/oil.png';
			this.title = 'oil';
			return "doil";
		}
		else if (/coal/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/coal.png';
			this.title = 'coal';
			return "dcoal";
		}
		else if (/ gas|gas|LNG/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/naturalgas.png';
			this.title = 'natural gas';
			return "dgas";
		}
		else if (/renewables|emissions|Feed in tariffs|Electric Vehicles/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/CO2.png';
			this.title = 'renewables';
			return "dren";
		}
		else if (/Daily|daily/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/daily.png';
			this.title = 'daily';
			return "ddaily";
		}
		else
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/Economics.png';
			this.title = 'economics';
			return "deco";
		}
	
	}
}
