import { Injectable } from '@angular/core';

import { MagicPaginationOptions, PaginationOptions } from '../model/pagination';

@Injectable()
export class PaginationConfigService {

    private options: MagicPaginationOptions = new MagicPaginationOptions({
        page: 1,
        itemsPerPage: 5,
        maxSize: 5,
        totalItems: 1,
        boundaryLinks: true,
        directionLinks: true,
        firstText: 'First',
        previousText: 'Previous',
        nextText: 'Next',
        lastText: 'Last',
        rotate: true
    });

    public get() {
        return this.options;
    }
}
