import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'demo-section-source',
  templateUrl: './demo-section-source.component.html',
  styleUrls: ['./demo-section-source.component.scss']
})
export class DemoSectionSourceComponent  {

  @Input() public html: string;
  @Input() public ts: string;

  public constructor() {
    
  }

}
