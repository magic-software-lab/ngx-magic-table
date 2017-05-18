var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let NgxMagicTableComponent = class NgxMagicTableComponent {
    constructor(objectUtilsService) {
        this.objectUtilsService = objectUtilsService;
        this.tableChanged = new EventEmitter();
        this._data = [];
    }
    set data(data) {
        this._data = data;
        if (this.isCallbackControls()) {
            this.rows = data;
        }
    }
    get data() {
        return this._data;
    }
    set columns(columns) {
        this._columns = columns;
        this.sorting = this._columns.find((column) => column.sort) ? true : false;
    }
    get columns() {
        return this._columns;
    }
    set tableOptions(tableOptions) {
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
    get tableOptions() {
        return this._tableOptions;
    }
    get sortedColumns() {
        const sortColumns = [];
        this.columns.forEach((column) => {
            if (column.sort) {
                sortColumns.push(column);
            }
        });
        return sortColumns;
    }
    getConfigTableChanged(page) {
        const sortedColumns = this.sortedColumns
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
    ngOnChanges(changes) {
        this.onChangeTable();
    }
    actionClick(action, data) {
        const emitAction = this.tableOptions.api[action];
        if (!emitAction) {
            throw new Error('[NgMagicTable] Action "' + action + '" not found on config.api');
        }
        emitAction(data);
    }
    onChangeTable(page = { page: this.pagination.page, itemsPerPage: this.pagination.itemsPerPage }) {
        // if (config.filtering) {
        //   Object.assign(this.config.filtering, config.filtering);
        // }
        // let filteredData = this.changeFilter(this.data, this.config);
        if (this.tableChanged && (this.tableChanged.observers.length > 0)) {
            this.emitChangeTable(page);
        }
        else {
            this.changeTable(page);
        }
    }
    emitChangeTable(page) {
        const config = this.getConfigTableChanged(page);
        if (!this.configTableChanged) {
            this.configTableChanged = config;
        }
        else {
            if (!this.objectUtilsService.isEquals(this.configTableChanged, config)) {
                this.configTableChanged = config;
                this.tableChanged.emit(config);
            }
        }
    }
    changePage(page, data = this.data) {
        if (!this.pagination) {
            return data;
        }
        this.pagination.length = data.length;
        const start = (page.page - 1) * page.itemsPerPage;
        const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }
    changeTable(page = { page: this.pagination.page, itemsPerPage: this.pagination.itemsPerPage }) {
        const sortedData = this.changeSort(this.data);
        this.rows = this.changePage(page, sortedData);
    }
    changeSort(data) {
        const columns = this.sortedColumns || [];
        const length = columns.length;
        if (!this.sorting || (length === 0)) {
            return data;
        }
        let columnSorted;
        const alphaSort = function (a, b, sort) {
            if (typeof a === 'string') {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }
            if (a > b) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (a < b) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        };
        return data.sort(function (a, b) {
            let tem = 0, index = 0;
            while (tem === 0 && index < length) {
                columnSorted = columns[index];
                tem = alphaSort(a[columnSorted.field], b[columnSorted.field], columnSorted.sort);
                index += 1;
            }
            return tem;
        });
    }
    isCallbackControls() {
        return this.tableChanged ? true : false;
    }
};
__decorate([
    Output()
], NgxMagicTableComponent.prototype, "tableChanged", void 0);
__decorate([
    Input()
], NgxMagicTableComponent.prototype, "data", null);
__decorate([
    Input()
], NgxMagicTableComponent.prototype, "columns", null);
__decorate([
    Input()
], NgxMagicTableComponent.prototype, "tableOptions", null);
NgxMagicTableComponent = __decorate([
    Component({
        selector: 'ngx-magic-table',
        templateUrl: './magic-table.component.html',
        styleUrls: ['./magic-table.component.scss']
    })
], NgxMagicTableComponent);
export { NgxMagicTableComponent };
