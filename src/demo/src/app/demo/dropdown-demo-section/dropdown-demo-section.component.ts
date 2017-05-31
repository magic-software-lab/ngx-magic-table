import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo-section',
  templateUrl: './dropdown-demo-section.component.html',
  styleUrls: ['./dropdown-demo-section.component.scss']
})
export class DropdownDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./dropdown-demo/dropdown-demo.component'),
    html: require('!!raw-loader?lang=markup!./dropdown-demo/dropdown-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
