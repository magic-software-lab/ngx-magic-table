import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-group-demo-section',
  templateUrl: './button-group-demo-section.component.html',
  styleUrls: ['./button-group-demo-section.component.scss']
})
export class ButtonGroupDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./button-group-demo/button-group-demo.component'),
    html: require('!!raw-loader?lang=markup!./button-group-demo/button-group-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
