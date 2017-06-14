import { EventEmitter } from '@angular/core';

export interface PageChangedEvent {
  itemsPerPage: number;
  page: number;
}

export interface PaginationOptions  {
  page: number;

  /** maximum number of items per page. If value less than 1 will display all items on one page */
  itemsPerPage: number;

  /** total number of items in all pages */
  totalItems: number;

  /** limit number for page links in pager */
  maxSize: number;

  /** if false first and last buttons will be hidden */
  boundaryLinks?: boolean;

  /** if false previous and next buttons will be hidden */
  directionLinks?: boolean;

  // labels
  /** first button text */
  firstText?: string;

  /** previous button text */
  previousText?: string;

  /** next button text */
  nextText?: string;

  /** last button text */
  lastText?: string;

  /** if true current page will in the middle of pages list */
  rotate?: boolean;

  // css
  /** add class to <li> */
  pageBtnClass?: string;

  /** if true pagination component will be disabled */
  disabled?: boolean;
}

export class MagicPaginationOptions {

    private _page: number;
    public get page() { return this._page; }
    public set page(page: number) {
      this._page = page;
      this.changed('page');
    }

    private _itemsPerPage: number;
    public get itemsPerPage() { return this._itemsPerPage; }
    public set itemsPerPage(itemsPerPage: number) {
      this._itemsPerPage = itemsPerPage;
      this.changed('itemsPerPage');
    }

    private _totalItems: number;
    public get totalItems() { return this._totalItems; }
    public set totalItems(totalItems: number) {
      this._totalItems = totalItems;
      this.changed('totalItems');
    }

    private _maxSize: number;
    public get maxSize() { return this._maxSize; }
    public set maxSize(maxSize: number) {
      this._maxSize = maxSize;
      this.changed('maxSize');
    }

    private _boundaryLinks: boolean;
    public get boundaryLinks(): boolean { return this._boundaryLinks; }
    public set boundaryLinks(boundaryLinks: boolean) {
      this._boundaryLinks = boundaryLinks;
      this.changed('boundaryLinks');
    }

    private _directionLinks: boolean;
    public get directionLinks(): boolean { return this._directionLinks; }
    public set directionLinks(directionLinks: boolean) {
      this._directionLinks = directionLinks;
      this.changed('directionLinks');
    }

    private _firstText: string;
    public get firstText() { return this._firstText; }
    public set firstText(firstText: string) {
      this._firstText = firstText;
      this.changed('firstText');
    }

    private _previousText: string;
    public get previousText() { return this._previousText; }
    public set previousText(previousText: string) {
      this._previousText = previousText;
      this.changed('previousText');
    }

    private _nextText: string;
    public get nextText() { return this._nextText; }
    public set nextText(nextText: string) {
      this._nextText = nextText;
      this.changed('nextText');
    }

    private _lastText: string;
    public get lastText() { return this._lastText; }
    public set lastText(lastText: string) {
      this._lastText = lastText;
      this.changed('lastText');
    }

    private _rotate: boolean;
    public get rotate() { return this._rotate; }
    public set rotate(rotate: boolean) {
      this._rotate = rotate;
      this.changed('rotate');
    }

    private _pageBtnClass: string;
    public get pageBtnClass() { return this._pageBtnClass; }
    public set pageBtnClass(pageBtnClass: string) {
      this._pageBtnClass = pageBtnClass;
      this.changed('pageBtnClass');
    }

    private _disabled: boolean;
    public get disabled() { return this._disabled; }
    public set disabled(disabled: boolean) {
      this._disabled = disabled;
      this.changed('disabled');
    }

    public onChange: EventEmitter<string> = new EventEmitter<string>();

    constructor(options?: PaginationOptions) {
      if (options) {
        this.assign(options);
      }
    }

    public assign(options: PaginationOptions) {
      Object.assign(this, options);
      this.changed();
    }

    private changed(attributeName?: string) {
      if (this.onChange) {
        this.onChange.emit(attributeName);
      }
    }

}

