import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [

  ],
  declarations: [
    ScrollTrackerDirective
  ],
  exports: [
    ScrollTrackerDirective
  ]
})
export class SharedModule { }
