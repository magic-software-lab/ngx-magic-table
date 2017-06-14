import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/index';
import { NgxMagicPaginationComponent } from './component/magic-pagination.component';
import { PaginationConfigService } from './service/pagination-config.service';

import { PaginationComponent } from './component-bootstrap/bootstrap-pagination.component';
import { PaginationConfig } from './component-bootstrap/pagination.config';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    NgxMagicPaginationComponent,
    PaginationComponent
  ],
  exports: [
    NgxMagicPaginationComponent,
    PaginationComponent
  ],
  providers: [
    PaginationConfigService,
    PaginationConfig
  ]
})
export class NgxMagicPaginationModule {

}
