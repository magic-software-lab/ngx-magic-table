import { Directive, ElementRef, OnChanges, Input, SimpleChange, Renderer } from '@angular/core';
import { DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { MagicTableColumn } from '../../model/magic-table-options';

@Directive({
  selector: '[bindData]'
})
export class NgxMagicTableBindDataDirective implements OnChanges {

  @Input() bindData: any;

  private get config() {
    return this.bindData;
  }

  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer,
    private renderer: Renderer,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe
  ) {

  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    this.build();
  }

  private build() {
    if (this.canBuild()) {
      const data = this.getData(this.config.row, this.config.column);

      const type = typeof data;

      if (type === 'number') {
        this.buildNumber(this.config.column, data);
      } else if (type === 'object') {
        this.buildObject(this.config.column, data);
      } else if (this.isDateISO8601(data)) {
        this.buildDateISO8601(this.config.column, data);
      } else {
        this.buildString(this.config.column, data);
      }
    }
  }

  private isDateISO8601(data: any) {
    /* tslint:disable:max-line-length */
    // pattern: 2017-03-20T17:18:37.419Z
    const regex = new RegExp(/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/);

    // pattern: 2017-03-31T11:55:14.49
    const regex2 = new RegExp(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/);
    /* tslint:enable:max-line-length */

    return regex.test(data) || regex2.test(data);
  }

  private buildNumber(column: MagicTableColumn, data: any) {
    let dataFormatted: any = data;
    if (column.format) {
      if (column.format.currencyCode) {
        dataFormatted = this.currencyPipe.transform(data, column.format.currencyCode, column.format.symbolDisplay, column.format.digits);
      } else {
        dataFormatted = this.decimalPipe.transform(data, column.format.digits);
      }
    }

    this.render(dataFormatted, [this.textAlign(column.align || 'right')]);
  }

  private buildString(column: MagicTableColumn, data: any) {
    this.render(data, [this.textAlign(column.align || 'left')]);
  }

  private buildDateISO8601(column: MagicTableColumn, data: any) {
    const dateFormatted = this.datePipe.transform(data, column.format || 'dd/MM/yyyy');
    this.render(dateFormatted, [this.textAlign(column.align || 'center')]);
  }

  private buildObject(column: MagicTableColumn, data: any) {
    if (this.isDate(data)) {
      const dateFormatted = this.datePipe.transform(data, column.format || 'dd/MM/yyyy');
      this.render(dateFormatted, [this.textAlign(column.align || 'center')]);
    } else {
      throw new Error('[NgMagicTable]: object not supported in column ' + column.field);
    }
  }

  private render(data: any, styles: Array<any>) {
    for (const style of styles) {
      this.renderer.setElementStyle(this.el.nativeElement, style.property, style.value);
    }

    this.el.nativeElement.innerHTML = data;
  }

  private textAlign(value: string) {
    return { property: 'text-align', value: value };
  }

  private isDate(data: any) {
    return data.getMonth;
  }

  private canBuild() {
    return this.config && this.config.row && this.config.column;
  }

  private getData(row: any, column: MagicTableColumn): string {
    if (row && column) {
      return column.field.split('.').reduce((prev: any, curr: string) => prev[curr], row);
    }
  }

  // Verify the need
  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
