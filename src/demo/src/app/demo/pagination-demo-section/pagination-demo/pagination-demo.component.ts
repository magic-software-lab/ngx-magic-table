import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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

  public data;

  public tableOptions: any = {
  
  };

  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get('assets/data/mock-large-data.json')
                .subscribe(res => this.data = res.json());
  }

}
