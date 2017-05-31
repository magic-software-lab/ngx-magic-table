import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatting-demo',
  templateUrl: './formatting-demo.component.html',
  styleUrls: ['./formatting-demo.component.scss']
})
export class FormattingDemoComponent implements OnInit {

   public columns: Array<any> = [
    {
      field: 'date',
      title: 'Date',
      format: 'dd/MM/yyyy',
    },
    {
      field: 'datetime',
      title: 'DateTime',
      format: 'dd/MM/yyyy HH:mm',
    },
    {
      field: 'time',
      title: 'Time',
      format: 'HH:mm',
    },
    {
      field: 'amount',
      title: 'Number',
      format: {
         digits: '1.2-2'
      }
    },
    {
      field: 'price',
      title: 'Price USD',
      format: {
        currencyCode: 'USD',
        symbolDisplay: true,
        digits: '1.2-2'
      }
    },
    {
      field: 'priceBRL',
      title: 'Price BRL',
      format: {
        currencyCode: 'BRL',
        symbolDisplay: true,
        digits: '3.2-2'
      }
    }
  ];

  public data: Array<any> = [
    {
      date: new Date('2011-10-10T14:47:00'),
      datetime: new Date('2011-10-10T14:47:00'),
      time: new Date('2011-10-10T14:47:00'),
      amount: 10,
      price: 4.20,
      priceBRL: 9.00
    },
    {
      date: new Date('2011-10-10T14:47:00'),
      datetime: new Date('2011-10-10T14:48:00'),
      time: new Date('2011-10-10T14:47:00'),
      description: 'Strawberry fields forever',
      amount: 150,
      price: 4.50,
      priceBRL: 10.50
    },
    {
      date: new Date('2011-10-10T14:47:00'),
      datetime: new Date('2011-10-10T14:48:00'),
      time: new Date('2011-10-10T14:47:00'),
      amount: 150,
      price: 5.00,
      priceBRL: 14.50
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
