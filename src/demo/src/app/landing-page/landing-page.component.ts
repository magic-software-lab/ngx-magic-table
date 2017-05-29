import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
