import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharableService {

	private activedef = new BehaviorSubject(false);
	private actdel = new BehaviorSubject(false);
  private bgcolor = new BehaviorSubject('#ffffff');
  private fontcolor = new BehaviorSubject('#37475a');

  private bgcolor1 = new BehaviorSubject('#ffffff');
  private fontcolor1 = new BehaviorSubject('#37475a');

  private colorOrder = new BehaviorSubject(0);

  colorBg = this.bgcolor.asObservable();
  colorFont = this.fontcolor.asObservable();

  colorBg1 = this.bgcolor1.asObservable();
  colorFont1 = this.fontcolor1.asObservable();

	active = this.activedef.asObservable();
	adel =  this.actdel.asObservable();
  co = this.colorOrder.asObservable();


  constructor() { }

  changeActive(aux: boolean){
  		this.activedef.next(aux)
  	}

  changeCO(aux:number){
    this.colorOrder.next(aux)
  }

  changeColorBG(bgc:string){
      this.bgcolor.next(bgc)
    }

  changeColorBG1(bgc:string){
      this.bgcolor1.next(bgc)
    }

  changeColorF(fc:string){
      this.fontcolor.next(fc)
    } 
    
  changeColorF1(fc:string){
      this.fontcolor1.next(fc)
    }

  changeDel(aux: boolean){
  		this.actdel.next(aux)
  	}

}
