import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

import { PrettifyWrapperService } from '../shared/shared.module';

import { SimpleDemoSectionComponent, SortDemoSectionComponent } from '../demo/demo.module';

@Component({
  selector: 'app-demos-page',
  templateUrl: './demos-page.component.html',
  styleUrls: ['./demos-page.component.scss']
})
export class DemosPageComponent implements OnInit {

  @ViewChild('demoComponent', {read: ViewContainerRef})
  public demoContainer: ViewContainerRef;

  public demoActivate: any;
  public demos = [
    {
      title: 'Simple',
      component: SimpleDemoSectionComponent
    },
    {
      title: 'Sort',
      component: SortDemoSectionComponent
    }
  ];

  private demoComponent: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
    private prettify: PrettifyWrapperService) { }

  ngOnInit() {
    this.changeDemo(this.demos[0]);
  }

  changeDemo(demo: any) {
    this.demoActivate = demo;

    this.createDemoComponent(demo.component);
  }

  private createDemoComponent(component: any) {
    this.destroyDemoComponent();
      
    const demoComponentFactory = this.componentFactoryResolver.resolveComponentFactory(component); 
    this.demoComponent = this.demoContainer.createComponent(demoComponentFactory);
    this.prettify.prettyPrint();
  }

  private destroyDemoComponent() {
    if (this.demoComponent) {
      this.demoComponent.destroy();
    }
  }

}
