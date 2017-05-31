import { Component, ViewChild } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   @ViewChild('scrolling')
   public containerScrolling;

  public constructor() {
    PageScrollConfig.defaultDuration = 500;
  }
  
}
