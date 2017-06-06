import { Component, ViewChild, Renderer } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   @ViewChild('scrolling')
   public containerScrolling;

  public constructor(private renderer: Renderer) {
    PageScrollConfig.defaultDuration = 500;
  }

  onDeactivate() {
    this.renderer.setElementProperty(document.body, 'scrollTop', 0);
  }
  
}
