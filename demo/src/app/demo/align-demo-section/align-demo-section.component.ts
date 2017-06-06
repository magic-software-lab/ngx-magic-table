import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-align-demo-section',
  templateUrl: './align-demo-section.component.html',
  styleUrls: ['./align-demo-section.component.scss']
})
export class AlignDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./align-demo/align-demo.component'),
    html: require('!!raw-loader?lang=markup!./align-demo/align-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
