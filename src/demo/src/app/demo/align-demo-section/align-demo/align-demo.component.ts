import { Component } from '@angular/core';

@Component({
  selector: 'app-align-demo',
  templateUrl: './align-demo.component.html',
  styleUrls: ['./align-demo.component.scss']
})
export class AlignDemoComponent {

   public columns: Array<any> = [
    {
      field: 'id',
      title: 'ID'
    },
    {
      field: 'description',
      title: 'Description',
      align: 'right'
    },
    {
      field: 'createdAt',
      title: 'Created at',
      format: 'dd/MM/yyyy HH:mm',
      align: 'left'
    },
    {
      field: 'price',
      title: 'Price',
      align: 'center',
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
