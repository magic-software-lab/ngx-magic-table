import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public columns: Array<any>;
  public data: Array<any>;
  public tableOptions: {

  };

  constructor() {
    this.createTableOptions();
  }

  private createTableOptions() {
    this.columns = [
      {
        field: 'id',
        title: 'ID'
      },
      {
        field: 'descricao',
        title: 'Descrição',
        sort: 'asc'
      },
      {
        field: 'criadoEm',
        title: 'Criado em',
        format: 'dd/MM/yyyy HH:mm',
        sort: 'desc'
      },
      {
        field: 'quantidade',
        title: 'Quantidade',
        sort: 'desc'
      },
      {
        field: 'valor',
        title: 'Valor',
        format: {
          digits: '1.2-2'
        }
      },
      {
        field: 'preco',
        title: 'Preço',
        format: {
          currencyCode: 'BRL',
          symbolDisplay: true,
          digits: '1.2-2'
        }
      },
      {
        title: 'Dropdown',
        actions: {
          type: 'dropdown',
          dropdownInfo: {
            styleClass: 'btn btn-default',
            styleIcon: 'fa fa-bars'
          },
          buttons: [
            {
              title: 'Editar',
              styleClass: 'btn btn-primary',
              styleIcon: 'fa fa-pencil',
              action: 'edit'
            },
            {
              title: 'Excluir',
              styleClass: 'btn btn-danger',
              styleIcon: 'fa fa-times',
              action: 'delete'
            }
          ]
        }
      },
      {
        title: 'Simple',
        actions: {
          type: 'simple',
          buttons: [
            {
              title: 'Editar',
              styleClass: 'btn btn-primary',
              styleIcon: 'fa fa-pencil',
              action: 'edit'
            }
          ]
        }
      },
      {
        title: 'Group',
        actions: {
          type: 'group',
          buttons: [
            {
              title: 'Editar',
              styleClass: 'btn btn-primary',
              action: 'edit'
            },
            {
              title: 'Excluir',
              styleClass: 'btn btn-danger',
              action: 'delete'
            }
          ]
        }
      },
      {
        title: 'Dropdown',
        actions: {
          type: 'dropdown',
          dropdownInfo: {
            styleClass: 'btn btn-default',
            styleIcon: 'fa fa-bars'
          },
          buttons: [
            {
              title: 'Editar',
              styleClass: 'btn btn-primary',
              styleIcon: 'fa fa-pencil',
              action: 'edit'
            },
            {
              title: 'Excluir',
              styleClass: 'btn btn-danger',
              styleIcon: 'fa fa-times',
              action: 'delete'
            }
          ]
        }
      }
    ];

    const d = [];
    for (let i = 0; i <= 1000; i++) {
      d.push({
        id: 1,
        descricao: 'Teste 1',
        criadoEm: new Date('2011-10-10T14:47:00'),
        quantidade: 10,
        valor: 4.20,
        preco: 1000.4884
      });
    }
    this.data = d;

    this.data = [
      {
        id: 1,
        descricao: 'Teste 1',
        criadoEm: new Date('2011-10-10T14:47:00'),
        quantidade: 10,
        valor: 4.20,
        preco: 1000.4884
      },
      {
        id: 2,
        criadoEm: new Date(),
        descricao: 'Ordenado',
        quantidade: 150,
        valor: 4.50,
        preco: 5455.4884
      },
      {
        id: 2,
        criadoEm: new Date('2011-10-10T14:48:00'),
        descricao: 'Aos',
        quantidade: 150,
        valor: 4.50,
        preco: 5455.4884
      },
      {
        id: 2,
        criadoEm: new Date('2011-10-10T14:48:00'),
        descricao: 'Aos',
        quantidade: 140,
        valor: 4.70,
        preco: 504
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

  public addData() {
    const dataAdd = [];
    dataAdd.push(...this.data);
    dataAdd.push(
      {
        id: 1,
        descricao: 'Teste 1',
        criadoEm: new Date(),
        quantidade: 10,
        valor: 4.20,
        preco: 1000.4884
      });

    this.data = dataAdd;
  }

  private onEdit(data: any) {
    console.log('Editando:', data);
  }

  private onDelete(data: any) {
    console.log('Excluindo:', data);
  }
}
