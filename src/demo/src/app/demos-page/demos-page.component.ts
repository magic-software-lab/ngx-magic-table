import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PrettifyWrapperService } from '../shared/shared.module';

import { SimpleDemoSectionComponent, 
         SortDemoSectionComponent,
         AlignDemoSectionComponent,
         FormattingDemoSectionComponent,
         SimpleButtonDemoSectionComponent,
         ButtonGroupDemoSectionComponent,
         DropdownDemoSectionComponent,
         PaginationDemoSectionComponent } from '../demo/demo.module';

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
      id: 'simple',
      title: 'Simple',
      component: SimpleDemoSectionComponent
    },
    {
      id: 'sort',
      title: 'Sort',
      component: SortDemoSectionComponent
    },
    {
      id: 'alignment',
      title: 'Alignment',
      component: AlignDemoSectionComponent
    },
    {
      id: 'formatting',
      title: 'Formatting',
      component: FormattingDemoSectionComponent
    },
    {
      id: 'simple-button',
      title: 'Simple button',
      component: SimpleButtonDemoSectionComponent
    },
    {
      id: 'button-group',
      title: 'Button Group',
      component: ButtonGroupDemoSectionComponent
    },
    {
      id: 'dropdown',
      title: 'Dropdown',
      component: DropdownDemoSectionComponent
    },
    {
      id: 'pagination',
      title: 'Pagination',
      component: PaginationDemoSectionComponent
    }
  ];

  private demoComponent: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver, 
    private route: ActivatedRoute,
    private prettify: PrettifyWrapperService) { }

  ngOnInit() {
    this.changeDemo(this.demos[0]);

    this.route.queryParams.subscribe(params => {
        if (params['id']) {
            const demoId = params['id'];
            const demoActivate = this.demos.find((demo) => demo.id === demoId);
            if (demoActivate) {
              this.changeDemo(demoActivate);
            }
        }
    });
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
