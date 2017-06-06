import { Component, OnInit } from '@angular/core';
import { MainDemoComponent } from './main-demo/main-demo.component';

@Component({
  selector: 'app-main-demo-section',
  templateUrl: './main-demo-section.component.html',
  styleUrls: ['./main-demo-section.component.scss']
})
export class MainDemoSectionComponent implements OnInit {

  public demoComponent = MainDemoComponent;

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./main-demo/main-demo.component'),
    html: require('!!raw-loader?lang=markup!./main-demo/main-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
