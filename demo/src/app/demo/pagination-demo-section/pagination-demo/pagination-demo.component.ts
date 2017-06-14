import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { MagicPaginationOptions } from '@magic-software/ngx-magic-table';

@Component({
  selector: 'app-pagination-demo',
  templateUrl: './pagination-demo.component.html',
  styleUrls: ['./pagination-demo.component.scss']
})
export class PaginationDemoComponent implements OnInit {

  public columns: Array<any> = [
      {
        field: 'id',
        title: 'ID'
      },
      {
        field: 'description',
        title: 'Description'
      },
      {
        field: 'foundation',
        title: 'Foundation',
        format: 'dd/MM/yyyy'
      }
  ];

  public data: any[] = [];

  public tableOptions: any = {};
  constructor(private http:Http) { }

  ngOnInit() {

    const a = new MagicPationation();
    this.http.get('assets/data/mock-large-data.json')
                .subscribe(res => {
                  this.data = res.json();
                  this.tableOptions = 
                  {
                  pagination: 
                    {
                      page: 1,
                      itemsPerPage: 5,
                      maxSize: 5,
                      totalItems: this.data.length
                  }
                  }
                  ;

                });
  }

}

export class MagicPationation {

}
