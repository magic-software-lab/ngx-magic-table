import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-demo',
  templateUrl: './sort-demo.component.html',
  styleUrls: ['./sort-demo.component.scss']
})
export class SortDemoComponent {

  public columns: Array<any> = [
    {
      field: 'id',
      title: 'ID'
    },
    {
      field: 'description',
      title: 'Description',
      sort: 'asc'
    },
    {
      field: 'createdAt',
      title: 'Created at',
      format: 'dd/MM/yyyy HH:mm'
    },
    {
      field: 'price',
      title: 'Price',
      format: {
        currencyCode: 'USD',
        symbolDisplay: true,
        digits: '1.2-2'
      }
    }
  ];

  public data: Array<any> = [
    {
      id: 1,
      description: 'Pineapple apple pen',
      createdAt: new Date('2011-10-10T14:47:00'),
      amount: 10,
      price: 4.20
    },
    {
      id: 2,
      createdAt: new Date(),
      description: 'Strawberry fields forever',
      amount: 150,
      price: 4.50
    },
    {
      id: 2,
      createdAt: new Date('2011-10-10T14:48:00'),
      description: 'Beetlejuicy',
      amount: 150,
      price: 4.50
    }
  ];


}
