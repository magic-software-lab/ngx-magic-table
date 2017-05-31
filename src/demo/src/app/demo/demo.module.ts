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
import { AlignDemoComponent } from './align-demo-section/align-demo/align-demo.component';
import { AlignDemoSectionComponent } from './align-demo-section/align-demo-section.component';
import { FormattingDemoSectionComponent } from './formatting-demo-section/formatting-demo-section.component';
import { FormattingDemoComponent } from './formatting-demo-section/formatting-demo/formatting-demo.component';
import { SimpleButtonDemoSectionComponent } from './simple-button-demo-section/simple-button-demo-section.component';
import { SimpleButtonDemoComponent } from './simple-button-demo-section/simple-button-demo/simple-button-demo.component';
import { ButtonGroupDemoSectionComponent } from './button-group-demo-section/button-group-demo-section.component';
import { ButtonGroupDemoComponent } from './button-group-demo-section/button-group-demo/button-group-demo.component';
import { DropdownDemoSectionComponent } from './dropdown-demo-section/dropdown-demo-section.component';
import { DropdownDemoComponent } from './dropdown-demo-section/dropdown-demo/dropdown-demo.component';

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
    SortDemoComponent,
    AlignDemoComponent,
    AlignDemoSectionComponent,
    FormattingDemoSectionComponent,
    FormattingDemoComponent,
    SimpleButtonDemoSectionComponent,
    SimpleButtonDemoComponent,
    ButtonGroupDemoSectionComponent,
    ButtonGroupDemoComponent,
    DropdownDemoSectionComponent,
    DropdownDemoComponent
  ],
  exports: [
    MainDemoSectionComponent,
    SimpleDemoSectionComponent,
    SortDemoSectionComponent
  ],
  entryComponents: [
    MainDemoComponent, 
    SimpleDemoSectionComponent, 
    SortDemoSectionComponent, 
    AlignDemoSectionComponent,
    FormattingDemoSectionComponent,
    SimpleButtonDemoSectionComponent,
    ButtonGroupDemoSectionComponent,
    DropdownDemoSectionComponent
  ]
})
export class DemoModule { }

export * from './simple-demo-section/simple-demo-section.component';
export * from './sort-demo-section/sort-demo-section.component';
export * from './align-demo-section/align-demo-section.component';
export * from './formatting-demo-section/formatting-demo-section.component';
export * from './simple-button-demo-section/simple-button-demo-section.component';
export * from './button-group-demo-section/button-group-demo-section.component';
export * from './dropdown-demo-section/dropdown-demo-section.component';