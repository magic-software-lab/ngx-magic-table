import { Component, OnInit, AfterViewInit } from '@angular/core';

import { PrettifyWrapperService } from '../shared/shared.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  constructor(private prettify: PrettifyWrapperService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.prettify.prettyPrint();
  }

  open(url: string) {
    window.open(url);
  }

  	onScrollDown () {
	    console.log('scrolled down!!')
	}

	onScrollUp () {
    	console.log('scrolled up!!')
    }

}
