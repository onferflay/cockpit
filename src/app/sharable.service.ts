import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharableService {

	private activedef = new BehaviorSubject(false);
	private actdel = new BehaviorSubject(false)

	active = this.activedef.asObservable();
	adel =  this.actdel.asObservable();

  constructor() { }

  changeActive(aux: boolean){
  		this.activedef.next(aux)
  	}

  changeDel(aux: boolean){
  		this.actdel.next(aux)
  	}

}
