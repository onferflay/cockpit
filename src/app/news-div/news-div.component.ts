import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-news-div',
  templateUrl: './news-div.component.html',
  styleUrls: ['./news-div.component.css']
})


export class NewsDivComponent implements OnInit {

	results : string[];
	text : string;
	img : string;

  constructor(private http: HttpClient) { }



 ngOnInit(): void {
 	this.http.get('http://149.56.102.173:8080/api/v1/latest/validated/').subscribe(data => {
 		console.log(data);
 		this.results = data.slice(0,4);
 		console.log(this.results);
 })	
}

SwitchMe(query: string): string {
	if (/power|electricity|wind|solar|nuclear|energy/gi.test(query))
	{
		this.img ='https://www.energymarketprice.com/ivan/uploads/power.png';
		return "dpower";
	}
	else if (/oil|gasoline/gi.test(query))
	{
		this.img ='https://www.energymarketprice.com/ivan/uploads/oil.png';
		return "doil";
	}
	else if (/coal/gi.test(query))
	{
		this.img ='https://www.energymarketprice.com/ivan/uploads/coal.png';
		return "dcoal";
	}
	else if (/ gas|gas|LNG/gi.test(query))
	{
		this.img ='https://www.energymarketprice.com/ivan/uploads/naturalgas.png';
		return "dgas";
	}
	else if (/renewables|emissions|Feed in tariffs|Electric Vehicles/gi.test(query))
	{
		this.img ='https://www.energymarketprice.com/ivan/uploads/CO2.png';
		return "dren";
	}
	else
	{
		this.img ='https://www.energymarketprice.com/ivan/uploads/Economics.png';
		return "deco";
	}

}
}


// $scope.SwitchFuction = function (id, caseStr) {
//         switch (caseStr) {
//             case '1':
//                 alert("Selected Case Number is 1");
//                 break;
//             case '2':
//                 alert("Selected Case Number is 2");
//                 break;
//             default:

//         }
//     };
