import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';

import { NgxMagicTableComponent } from './component/table/magic-table.component';
import { NgxMagicTableContentPlaceholderComponent } from './component/content-placeholder/content-placeholder.component';
import { NgxMagicTableBindDataDirective } from './directive/bind-data/bind-data.directive';
import { NgxMagicTableSortedColumnDirective } from './directive/column/sorted-column.directive';

import { NgxMagicTableObjectUtilsService } from './service/object-utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    NgxMagicTableComponent,
    NgxMagicTableBindDataDirective,
    NgxMagicTableSortedColumnDirective,
    NgxMagicTableContentPlaceholderComponent
  ],
  exports: [
    NgxMagicTableComponent,
    NgxMagicTableBindDataDirective,
    NgxMagicTableSortedColumnDirective,
    NgxMagicTableContentPlaceholderComponent
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    NgxMagicTableObjectUtilsService
  ]
})
export class NgxMagicTableModule {
  // public static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: NgxMagicTableModule,
  //     providers: [

  //     ]
  //   };
  // }
}
