import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

import { IMagicPaginationOptions, MagicPaginationOptions, PageChangedEvent } from '../model/pagination';

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

    private onChangeOptions(attributeName: string) {
      this.refresh();
    }

    private refresh() {
      console.log('refresh');
    }

}
