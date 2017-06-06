import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-demo-section',
  templateUrl: './simple-demo-section.component.html',
  styleUrls: ['./simple-demo-section.component.scss']
})
export class SimpleDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./simple-demo/simple-demo.component'),
    html: require('!!raw-loader?lang=markup!./simple-demo/simple-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
