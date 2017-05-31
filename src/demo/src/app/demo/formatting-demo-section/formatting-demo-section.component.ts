import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatting-demo-section',
  templateUrl: './formatting-demo-section.component.html',
  styleUrls: ['./formatting-demo-section.component.scss']
})
export class FormattingDemoSectionComponent implements OnInit {

  public demoFiles =  {
    ts: require('!!raw-loader?lang=typescript!./formatting-demo/formatting-demo.component'),
    html: require('!!raw-loader?lang=markup!./formatting-demo/formatting-demo.component.html')
  };

  constructor() { }

  ngOnInit() {
  }

}
