import { Component, OnInit,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News,newsForm } from '../news';
import { SharableService} from "../sharable.service";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-news-div',
  templateUrl: './news-div.component.html',
  styleUrls: ['./news-div.component.css']
})

export class NewsDivComponent implements OnInit {

	@Input() colors:string[] = ['red','green'];
	@Input() editn : newsForm = new newsForm(1533, 'vano', 4, [false,false,false,false,false,false,false,false,false,false,false]);
	results : any;
	text: string[];
	stiri : News;
	img : string;
	title: string;
	active : boolean;
	clist : string[];
	acolor: boolean;
	sdelete: boolean;
	action : any;
	maindata : any;
	co :number;
	colorbg:string;
	colorf:string;
	nfilter: string;
   
	constructor(private http: HttpClient,private vano: SharableService) { }

	ngOnInit(){
		this.active = false;
		this.clist = ["All categories","Daily","Oil","Natural Gas","Power","Energy","Nuclear","Coal","Forex","Renewables","Carbon"];
		this.filterMe();
		this.vano.active.subscribe(acolor => this.acolor = acolor);
		this.vano.adel.subscribe(sdelete => this.sdelete = sdelete);
		this.vano.colorbg.subscribe(bgc => this.colorbg = bgc);
		this.vano.colorf.subscribe(fc => this.colorf = fc);
		this.vano.co.subscribe(co => this.co = co);
		this.co =0;
	}

	closeall(){
		this.active = false;
		this.vano.changeActive(false);
		this.vano.changeDel(false);
	}

	onSubmit(){
		this.active = false;
		this.vano.changeActive(false);

		this.http.post('http://www.marketpricesolutions.com/apitest.asp','act=editnews&type=0&nname='+ encodeURI(this.editn.name) +'&ckid='+ this.editn.ckid +'&nrnews='+ this.editn.numberof +'&filter=' + this.editn.categories,{
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
			}}).subscribe();
	}

	filterMe(){
		let filter = '';
		if (this.editn.categories[0]) { filter = '' }
		else
		{
			if (this.editn.categories[1]) { filter += 'daily,' }
			if (this.editn.categories[2]) { filter += 'oil,gasoline,fuel,petrochemicals,' }
			if (this.editn.categories[3]) { filter += 'gas,LNG,CNG,Henry,' }
			if (this.editn.categories[4]) { filter += 'electricity,european power, europe power,french power,german power,nordic power,power grid,power interconnections,power prices,power types,uk power' }
			if (this.editn.categories[5]) { filter += 'energy,' }
			if (this.editn.categories[6]) { filter += 'nuclear power,nuclear station,nuclear fuel,' }
			if (this.editn.categories[7]) { filter += 'coal,' }
			if (this.editn.categories[8]) { filter += 'forex,' }
			if (this.editn.categories[10]) { filter += 'emissions,carbon,' }
			if (this.editn.categories[9]) { filter += 'renewables,eeg,wind,h2,geothermal,Feed in tariffs,Electric Vehicles,solar,' }
			filter = filter.substring(0,filter.length - 1);
		}

		this.http.post('http://api.energymarketprice.com/api/v1/filter/posts/','filter=&query='+ filter +'&country=&code=&sources=&sentiment=&date_from=&forecasters=&date_to=&language=&pag=1',{
			headers: {
				"Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
			}
		}).subscribe(data => {
		this.maindata = data["results"];
		this.results = this.maindata.slice(0,this.editn.numberof);
	 });
		
	}
	setNews(){
		this.results = this.maindata.slice(0,this.editn.numberof); 
	}

	filterNews(){
	}

	offMe(){
		this.vano.changeActive(this.acolor);
		this.vano.changeCO(0);
		this.colorbg = this.colors[0];
		this.colorf = this.colors[1];
	}

  verify(){
    if (this.editn.name.length < 4) { this.editn.name = 'Market News' }
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
	
	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.results, event.previousIndex, event.currentIndex);
	  }
	  
	get diagnostic() { return JSON.stringify(this.editn); }
	
	SwitchMe(query: string): string {
		if (/electricity|european power| europe power|french power|german power|nordic power|power grid|power interconnections|power prices|power types|uk power/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/rozetka.png';
			this.title = 'power';
			return "dpower";
		}
		else if (/nuclear power|nuclear station|nuclear fuel/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/nuclear.png';
			this.title = 'nuclear';
			return "dnuclear";
		}
		else if (/oil|gasoline|fuel|petrochemicals/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/oil.png';
			this.title = 'oil';
			return "doil";
		}
		else if (/energy/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/power.png';
			this.title = 'energy';
			return "denergy";
		}
		else if (/coal/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/coal.png';
			this.title = 'coal';
			return "dcoal";
		}
		else if (/gas|LNG|CNG|Henry/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/naturalgas.png';
			this.title = 'natural gas';
			return "dgas";
		}
		else if (/renewables|eeg|wind|h2|geothermal|Feed in tariffs|Electric Vehicles|solar/gi.test(query))
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
		else if (/emissions|carbon,/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/cloud.png';
			this.title = 'Carbon';
			return "dcarbon";
		}
		else if (/forex/gi.test(query))
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/forex.png';
			this.title = 'forex';
			return "deco";
		}
		else
		{
			this.img ='https://www.energymarketprice.com/ivan/uploads/Economics.png';
			this.title = 'economics';
			return "deco";
		}
	
	}
}

