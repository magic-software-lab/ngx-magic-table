import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

import { MagicTableOptions, MagicTableColumns, MagicTableColumn, MagicTableOptionsPagination } from '../../model/magic-table-options';
import { NgxMagicTableObjectUtilsService } from '../../service/object-utils';

@Component({
  moduleId: module.id,
  selector: 'ngx-magic-table',
  templateUrl: './magic-table.component.html',
  styleUrls: []
})
export class NgxMagicTableComponent implements OnInit, OnChanges {

  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  @Input()
  public set data(data: Array<any>) {
    this._data = data;

    if (this.isCallbackControls()) {
      this.rows = data;
    }
  }

  public get data(): Array<any> {
    return this._data;
  }

  @Input()
  public set columns(columns: MagicTableColumns) {
    if (columns) {
      this._columns = columns;
      this.sorting = this._columns.find((column: any) => column.sort) ? true : false;
    }
  }

  public get columns(): MagicTableColumns {
    return this._columns;
  }

  @Input()
  public set tableOptions(tableOptions: MagicTableOptions) {
    if (tableOptions) {
      this._tableOptions = tableOptions;

      if (this._tableOptions.pagination) {
        this.pagination = {
          page: this._tableOptions.pagination.page,
          numPages: this._tableOptions.pagination.numPages,
          itemsPerPage: this._tableOptions.pagination.itemsPerPage,
          maxSize: this._tableOptions.pagination.maxSize,
          length: this._tableOptions.pagination.length
        };
      }
    }
  }

  public get tableOptions() {
    return this._tableOptions;
  }

  public rows: Array<any>;

  private _data: Array<any> = [];
  private _tableOptions: MagicTableOptions;
  private _columns: MagicTableColumns;
  private sorting: any;
  private configTableChanged: any;

  private pagination: MagicTableOptionsPagination = {
    page: 1,
    numPages: 1,
    itemsPerPage: 5,
    maxSize: 5,
    length: 1
  };

  constructor(private objectUtilsService: NgxMagicTableObjectUtilsService) { }

  public get sortedColumns(): Array<any> {
    const sortColumns: Array<any> = [];

    if (this.columns) {
      this.columns.forEach((column: any) => {
        if (column.sort) {
          sortColumns.push(column);
        }
      });
    }

    return sortColumns;
  }

  private getConfigTableChanged(page: any): any {
    const sortedColumns: Array<any> = this.sortedColumns
      .map((column) => { return { field: column.field, sort: column.sort }; });
    return {
      page: page.page,
      itemsPerPage: page.itemsPerPage,
      sortedColumns: sortedColumns
    };
  }

  ngOnInit() {
    this.onChangeTable();
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    this.onChangeTable();
  }

  public actionClick(action: string, data: any): void {
    const emitAction = this.tableOptions.api[action];
    if (!emitAction) {
      throw new Error('[NgMagicTable] Action "' + action + '" not found on config.api');
    }

    emitAction(data);
  }

  public onChangeTable(page: any = { page: this.pagination.page, itemsPerPage: this.pagination.itemsPerPage }): any {
    // if (config.filtering) {
    //   Object.assign(this.config.filtering, config.filtering);
    // }

    // let filteredData = this.changeFilter(this.data, this.config);

    if (this.tableChanged && (this.tableChanged.observers.length > 0)) {
      this.emitChangeTable(page);
    } else {
      this.changeTable(page);
    }
  }

  private emitChangeTable(page: any) {
    const config = this.getConfigTableChanged(page);

    if (!this.configTableChanged) {
      this.configTableChanged = config;
    } else {
      if (!this.objectUtilsService.isEquals(this.configTableChanged, config)) {
        this.configTableChanged = config;
        this.tableChanged.emit(config);
      }
    }
  }

  private changePage(page: any, data: Array<any> = this.data): Array<any> {
    if (!this.pagination || !data) {
      return data;
    }

    this.pagination.length = data.length;

    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  private changeTable(page: any = { page: this.pagination.page, itemsPerPage: this.pagination.itemsPerPage }) {
    const sortedData = this.changeSort(this.data);
    this.rows = this.changePage(page, sortedData);
  }

  private changeSort(data: any): any {
    const columns = this.sortedColumns || [];
    const length: number = columns.length;

    if (!this.sorting || (length === 0)) {
      return data;
    }

    let columnSorted: MagicTableColumn;
    const alphaSort = function (a: any, b: any, sort: any) {
      if (typeof a === 'string') {
        a = a.toLowerCase();
        b = b.toLowerCase();
      }

      if (a > b) {
        return sort === 'desc' ? -1 : 1;
      } else if (a < b) {
        return sort === 'asc' ? -1 : 1;
      }

      return 0;
    };

    return data.sort(function (a: any, b: any) {
      let tem = 0, index = 0;
      while (tem === 0 && index < length) {
        columnSorted = columns[index];
        tem = alphaSort(a[columnSorted.field], b[columnSorted.field], columnSorted.sort);
        index += 1;
      }
      return tem;
    });
  }

  private isCallbackControls() {
    return this.tableChanged ? true : false;
  }

}
