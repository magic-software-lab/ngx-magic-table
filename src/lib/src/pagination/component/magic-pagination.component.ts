import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { PaginationOptions, MagicPaginationOptions, PageChangedEvent } from '../model/pagination';

import { ObjectUtilsService } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'ngx-magic-pagination',
  templateUrl: './magic-pagination.component.html',
  styleUrls: []
})
export class NgxMagicPaginationComponent implements OnInit, OnChanges {

    @Input()
    public options: MagicPaginationOptions;

    /** fired when total pages count changes, $event:number equals to total pages count */
    @Output() public numPages: EventEmitter<number> = new EventEmitter<number>();

    /** fired when page was changed, $event:{page, itemsPerPage} equals to object with current page index and number of items per page */
    @Output() public pageChanged: EventEmitter<PageChangedEvent> = new EventEmitter<PageChangedEvent>();

    public pages: any[];

    constructor(
      private objectUtilsService: ObjectUtilsService
    ) {

    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['options']) {
        this.options.onChange.subscribe(this.onChangeOptions.bind(this));
      }
    }

    public selectPage(page: number, event?: Event) {
      if (event) {
        event.preventDefault();
      }

      if (!this.options.disabled) {
        if (event && event.target) {
          const target: any = event.target;
          target.blur();
        }
        this.writeValue(page);
        // this.onChange(this.page);
      }
    }

    private onChangeOptions(attributeName: string) {
      this.refresh();
    }

    private refresh() {
      this.calculateTotalPages();
      // this.getPages();
    }

    private writeValue(value: number): void {
      this.options.page = value;
      // this.pages = this.getPages(this.options.page, this.totalPages);
    }

    // Create page object used in template
    protected makePage(num: number, text: string, active: boolean): {number: number, text: string, active: boolean} {
      return { text, number: num, active };
    }

    private getPages(currentPage: number, totalPages: number): any[] {
      const pages: any[] = [];

      // Default page limits
      let startPage = 1;
      let endPage = totalPages;
      const isMaxSized = typeof this.options.maxSize !== 'undefined' && this.options.maxSize < totalPages;

      // recompute if maxSize
      if (isMaxSized) {
        if (this.options.rotate) {
          // Current page is displayed in the middle of the visible ones
          startPage = Math.max(currentPage - Math.floor(this.options.maxSize / 2), 1);
          endPage = startPage + this.options.maxSize - 1;

          // Adjust if limit is exceeded
          if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - this.options.maxSize + 1;
          }
        } else {
          // Visible pages are paginated with maxSize
          startPage = ((Math.ceil(currentPage / this.options.maxSize) - 1) * this.options.maxSize) + 1;

          // Adjust last page if limit is exceeded
          endPage = Math.min(startPage + this.options.maxSize - 1, totalPages);
        }
      }

      // Add page number links
      for (let num = startPage; num <= endPage; num++) {
        const page = this.makePage(num, num.toString(), num === currentPage);
        pages.push(page);
      }

      // Add links to move between page sets
      if (isMaxSized && !this.options.rotate) {
        if (startPage > 1) {
          const previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < totalPages) {
          const nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }

    private calculateTotalPages(): number {
      const totalPages = this.options.itemsPerPage < 1
        ? 1
        : Math.ceil(this.options.totalItems / this.options.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    }

}
