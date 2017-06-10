import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-demo-section',
  templateUrl: './pagination-demo-section.component.html',
  styleUrls: ['./pagination-demo-section.component.scss']
})
export class PaginationDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./pagination-demo/pagination-demo.component'),
    html: require('!!raw-loader?lang=markup!./pagination-demo/pagination-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
