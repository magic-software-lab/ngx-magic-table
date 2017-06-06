import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-button-demo',
  templateUrl: './simple-button-demo.component.html',
  styleUrls: ['./simple-button-demo.component.scss']
})
export class SimpleButtonDemoComponent implements OnInit {

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
      },
      {
        title: 'Edit',
        actions: {
          type: 'simple',
          buttons: [
            {
              title: 'Edit',
              styleClass: 'btn btn-primary',
              styleIcon: 'fa fa-pencil',
              action: 'edit'
            }
          ]
        }
      },
      {
        title: 'Delete',
        actions: {
          type: 'simple',
          buttons: [
            {
              title: 'Delete',
              styleClass: 'btn btn-danger',
              styleIcon: 'fa fa-times',
              action: 'delete'
            }
          ]
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

  public tableOptions: any = {
      api: {
        edit: this.onEdit,
        delete: this.onDelete
      }
  };

  constructor() { }

  ngOnInit() {
  }

  private onEdit(data: any) {
    alert('Editing ' + data.description);
  }

  private onDelete(data: any) {
    alert('Deleting ' + data.description);
  }


}
