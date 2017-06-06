import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-demo',
  templateUrl: './main-demo.component.html',
  styleUrls: ['./main-demo.component.scss']
})
export class MainDemoComponent implements OnInit {

  public columns: Array<any>;
  public data: Array<any>;
  public tableOptions: {

  };

  constructor() {
    this.createTableOptions();
  }

  ngOnInit() {
  }

  private createTableOptions() {
    this.columns = [
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
        title: 'Actions',
        actions: {
          type: 'dropdown',
          dropdownInfo: {
            styleClass: 'btn btn-default',
            styleIcon: 'fa fa-bars'
          },
          buttons: [
            {
              title: 'Edit',
              styleClass: 'btn btn-primary',
              styleIcon: 'fa fa-pencil',
              action: 'edit'
            },
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

    this.data = [
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

    this.tableOptions = {
      pagination: {
        page: 1,
        itemsPerPage: 5,
        maxSize: 5,
        numPages: 1
      },
      api: {
        edit: this.onEdit,
        delete: this.onDelete
      }
    };
  }

  private onEdit(data: any) {
    alert('Editing...');
  }

  private onDelete(data: any) {
    alert('Deleting...');
  }

}
