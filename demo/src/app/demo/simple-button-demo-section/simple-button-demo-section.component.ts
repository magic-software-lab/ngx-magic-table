import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-button-demo-section',
  templateUrl: './simple-button-demo-section.component.html',
  styleUrls: ['./simple-button-demo-section.component.scss']
})
export class SimpleButtonDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./simple-button-demo/simple-button-demo.component'),
    html: require('!!raw-loader?lang=markup!./simple-button-demo/simple-button-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
