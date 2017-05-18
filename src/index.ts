import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';

import { NgxMagicTableComponent } from './components/table/magic-table.component';
import { NgxMagicTableBindDataDirective } from './directives/bind-data/bind-data.directive';
import { NgxMagicTableSortedColumnDirective } from './directives/column/sorted-column.directive';
import { NgxMagicTableContentPlaceholderComponent } from './components/content-placeholder/content-placeholder.component';

import { NgxMagicTableObjectUtilsService } from './services/object-utils';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxMagicTableModule,
      providers: [

      ]
    };
  }
}
