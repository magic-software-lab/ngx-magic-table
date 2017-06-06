import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-demo-section',
  templateUrl: './sort-demo-section.component.html',
  styleUrls: ['./sort-demo-section.component.scss']
})
export class SortDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./sort-demo/sort-demo.component'),
    html: require('!!raw-loader?lang=markup!./sort-demo/sort-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
