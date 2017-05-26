import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-demo-section',
  templateUrl: './main-demo-section.component.html',
  styleUrls: ['./main-demo-section.component.scss']
})
export class MainDemoSectionComponent implements OnInit {

  public main =  {
    component: require('!!raw-loader?lang=typescript!./main-demo/main-demo.component'),
    html: require('!!raw-loader?lang=markup!./main-demo/main-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
