import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cockpit';

ngOnInit() {

	 	$(document).keyup(function(e){
            if (e.keyCode === 27 ){
        		$('.closeallbtn').click();
            }
  	 	});
  }
}
