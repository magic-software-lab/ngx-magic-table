import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMagicPaginationComponent } from './component/magic-pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxMagicPaginationComponent
  ],
  exports: [
    NgxMagicPaginationComponent
  ],
  providers: [

  ]
})
export class NgxMagicPaginationModule {

}
