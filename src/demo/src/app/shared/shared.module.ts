import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { PrettifyWrapperService } from './services/prettify-wrapper/prettify-wrapper.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PrettifyWrapperService
  ],
  declarations: [
    ScrollTrackerDirective
  ],
  exports: [
    ScrollTrackerDirective
  ]
})
export class SharedModule { }

export * from './services/prettify-wrapper/prettify-wrapper.service';