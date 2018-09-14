import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharableService {

	private activedef = new BehaviorSubject(false);

	active = this.activedef.asObservable();

  constructor() { }

  changeActive(aux: boolean){
  		this.activedef.next(aux)
  	}
}
