var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Input } from '@angular/core';
let NgxMagicTableBindDataDirective = class NgxMagicTableBindDataDirective {
    constructor(el, sanitizer, renderer, currencyPipe, decimalPipe, datePipe) {
        this.el = el;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this.currencyPipe = currencyPipe;
        this.decimalPipe = decimalPipe;
        this.datePipe = datePipe;
    }
    get config() {
        return this.terpNgMagicTableBindData;
    }
    ngOnChanges(changes) {
        this.build();
    }
    build() {
        if (this.canBuild()) {
            const data = this.getData(this.config.row, this.config.column);
            const type = typeof data;
            if (type === 'number') {
                this.buildNumber(this.config.column, data);
            }
            else if (type === 'object') {
                this.buildObject(this.config.column, data);
            }
            else if (this.isDateISO8601(data)) {
                this.buildDateISO8601(this.config.column, data);
            }
            else {
                this.buildString(this.config.column, data);
            }
        }
    }
    isDateISO8601(data) {
        /* tslint:disable:max-line-length */
        // pattern: 2017-03-20T17:18:37.419Z
        const regex = new RegExp(/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/);
        // pattern: 2017-03-31T11:55:14.49
        const regex2 = new RegExp(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/);
        /* tslint:enable:max-line-length */
        return regex.test(data) || regex2.test(data);
    }
    buildNumber(column, data) {
        let dataFormatted = data;
        if (column.format) {
            if (column.format.currencyCode) {
                dataFormatted = this.currencyPipe.transform(data, column.format.currencyCode, column.format.symbolDisplay, column.format.digits);
            }
            else {
                dataFormatted = this.decimalPipe.transform(data, column.format.digits);
            }
        }
        this.render(dataFormatted, [this.textAlign(column.align || 'right')]);
    }
    buildString(column, data) {
        this.render(data, [this.textAlign(column.align || 'left')]);
    }
    buildDateISO8601(column, data) {
        const dateFormatted = this.datePipe.transform(data, column.format || 'dd/MM/yyyy');
        this.render(dateFormatted, [this.textAlign(column.align || 'center')]);
    }
    buildObject(column, data) {
        if (this.isDate(data)) {
            const dateFormatted = this.datePipe.transform(data, column.format || 'dd/MM/yyyy');
            this.render(dateFormatted, [this.textAlign(column.align || 'center')]);
        }
        else {
            throw new Error('[NgMagicTable]: object not supported in column ' + column.field);
        }
    }
    render(data, styles) {
        for (const style of styles) {
            this.renderer.setElementStyle(this.el.nativeElement, style.property, style.value);
        }
        this.el.nativeElement.innerHTML = data;
    }
    textAlign(value) {
        return { property: 'text-align', value: value };
    }
    isDate(data) {
        return data.getMonth;
    }
    canBuild() {
        return this.config && this.config.row && this.config.column;
    }
    getData(row, column) {
        if (row && column) {
            return column.field.split('.').reduce((prev, curr) => prev[curr], row);
        }
    }
    // Verify the need
    sanitize(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
};
__decorate([
    Input()
], NgxMagicTableBindDataDirective.prototype, "terpNgMagicTableBindData", void 0);
NgxMagicTableBindDataDirective = __decorate([
    Directive({
        selector: '[bindData]'
    })
], NgxMagicTableBindDataDirective);
export { NgxMagicTableBindDataDirective };
