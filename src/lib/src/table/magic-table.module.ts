import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';

import { MagicTableSharedModule } from '../shared/index';
import { MagicPaginationModule } from '../pagination/index';

import { MagicTableComponent } from './components/table/magic-table.component';
import { MagicTableContentPlaceholderComponent } from './components/content-placeholder/content-placeholder.component';
import { MagicTableBindDataDirective } from './directives/bind-data/bind-data.directive';
import { MagicTableSortedColumnDirective } from './directives/column/sorted-column.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MagicTableSharedModule,
    MagicPaginationModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    MagicTableComponent,
    MagicTableBindDataDirective,
    MagicTableSortedColumnDirective,
    MagicTableContentPlaceholderComponent
  ],
  exports: [
    MagicTableComponent,
    MagicTableBindDataDirective,
    MagicTableSortedColumnDirective,
    MagicTableContentPlaceholderComponent
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe
  ]
})
export class MagicTableModule {

}
