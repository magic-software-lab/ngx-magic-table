import { Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnChanges, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'demo-section',
  templateUrl: './demo-section.component.html',
  styleUrls: ['./demo-section.component.scss']
})
export class DemoSectionComponent implements OnChanges {
  @Input() public html: string;
  @Input() public ts: string;
  @Input() public component: any;

  @ViewChild('demoComponent', {read: ViewContainerRef})
  public demoContainer: ViewContainerRef;

  private demoComponent: any;

  public constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    this.createDemoComponent();
  }

  private createDemoComponent() {
    if (this.component) {
      this.destroyDemoComponent();
      
      const demoComponentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component); 
      this.demoComponent = this.demoContainer.createComponent(demoComponentFactory);
    }
  }

  private destroyDemoComponent() {
    if (this.demoComponent) {
      this.demoComponent.destroy();
    }
  }
}
