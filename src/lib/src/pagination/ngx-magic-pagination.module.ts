import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';
import { NgxMagicPaginationComponent } from './component/magic-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
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
