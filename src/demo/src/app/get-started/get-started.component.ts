import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  public demoModuleTS = require('!!raw-loader?lang=typescript!../demo/demo-module-example/demo-module-example.module');

  public htmlSources = {
    bootstrap3: require('!!raw-loader?lang=markup!../demo/demo-module-example/bootstrap3.html'),
    bootstrap4: require('!!raw-loader?lang=markup!../demo/demo-module-example/bootstrap4.html')
  }

  constructor() { }

  ngOnInit() {
  }

}
