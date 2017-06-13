import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';
import { NgxMagicPaginationComponent } from './component/magic-pagination.component';
import { PaginationConfigService } from './service/pagination-config.service';

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
    PaginationConfigService
  ]
})
export class NgxMagicPaginationModule {

}
