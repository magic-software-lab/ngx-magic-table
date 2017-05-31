import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from 'ngx-bootstrap';
import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

import { DemoSectionComponent } from './demo-section/demo-section.component';
import { DemoSectionSourceComponent } from './demo-section-source/demo-section-source.component';

import { MainDemoComponent } from './main-demo-section/main-demo/main-demo.component';
import { MainDemoSectionComponent } from './main-demo-section/main-demo-section.component';
import { SimpleDemoSectionComponent } from './simple-demo-section/simple-demo-section.component';
import { SimpleDemoComponent } from './simple-demo-section/simple-demo/simple-demo.component';
import { SortDemoSectionComponent } from './sort-demo-section/sort-demo-section.component';
import { SortDemoComponent } from './sort-demo-section/sort-demo/sort-demo.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    NgxMagicTableModule
  ],
  providers: [

  ],
  declarations: [
    DemoSectionComponent,
    DemoSectionSourceComponent,
    MainDemoComponent,
    MainDemoSectionComponent,
    SimpleDemoSectionComponent,
    SimpleDemoComponent,
    SortDemoSectionComponent,
    SortDemoComponent
  ],
  exports: [
    MainDemoSectionComponent,
    SimpleDemoSectionComponent,
    SortDemoSectionComponent
  ],
  entryComponents: [MainDemoComponent, SimpleDemoSectionComponent, SortDemoSectionComponent]
})
export class DemoModule { }

export * from './simple-demo-section/simple-demo-section.component';
export * from './sort-demo-section/sort-demo-section.component';