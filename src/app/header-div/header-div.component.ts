import { Component, OnInit, Input } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-header-div',
  templateUrl: './header-div.component.html',
  styleUrls: ['./header-div.component.css']
})

export class HeaderDivComponent implements OnInit {
	test : any;
  active:string;
  root : string;
  sroot : any;
  droot : any;

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.active = "newssection";
    this.root = "Root Params";
    this.sroot = this.route.snapshot.paramMap.get("ckid");

    this.route.paramMap.subscribe(params => {
      this.droot = params.get("ckid");
    });
  }

  goto(ckid:number): void {
    this.router.navigate(["cockpit", ckid]);
  }

  jump(){
      $('html, body').animate({ scrollTop: $("#"+this.active).offset().top}, 2000);
  }
}
