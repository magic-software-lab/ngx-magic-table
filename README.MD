# ngx-magic-table
### Magic Software

Easy to use table for Angular(4.x.x), it's magic!!

![Its Magic](http://www.reactiongifs.com/r/mgc.gif)

####<span style="color:red">Warning</span>
This library is in alpha testing, there are some issues to fix and new features will be implemented.

[![Build Status](https://travis-ci.org/magic-software-lab/ngx-magic-table.svg?branch=master)](https://travis-ci.org/magic-software-lab/ngx-magic-table)
[![codecov](https://codecov.io/gh/magic-software-lab/ngx-magic-table/branch/master/graph/badge.svg)](https://codecov.io/gh/magic-software-lab/ngx-magic-table)

## Installation

### Dependencies

- [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap).

```bash
$ npm install ngx-bootstrap --save 
```

You will need bootstrap styles (Bootstrap 3)

```
<!-- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

Or Bootstrap 4

```
<!--- index.html -->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet">
```
To enable bootstrap 4 theme templates in ngx-bootstrap, please read
[here](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/bootstrap4.md).

More info in ngx-bootstrap repository.

### Lib

To install this library, run:

```bash
$ npm install @magic-software/ngx-magic-table --save
```

## Using

In your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Imports
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';
import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	
	// Dependencies
	BsDropdownModule.forRoot(),
	PaginationModule.forRoot(),
    
    // Module
    NgxMagicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once is imported, you can use its components in your Angular application:

* HTML Template:

```xml
...

<ngx-magic-table [columns]="columns" [data]="data" [tableOptions]="tableOptions"> </ngx-magic-table>

...
```

* Component (TS):

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public columns: Array<any>;
  public data: Array<any>;
  public tableOptions: {

  };

  constructor() {
    this.prepareMagic();
  }

  private prepareMagic() {
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
	        format: 'dd/MM/yyyy HH:mm',
	        sort: 'desc'
	      },
	      {
	        field: 'amount',
	        title: 'Amount',
	        format: {
	          digits: '1.2-2'
	        }
	      },
	      {
	        field: 'price',
	        title: 'Price',
	        format: {
	          currencyCode: 'BRL',
	          symbolDisplay: true,
	          digits: '1.2-2'
	        }
	      },
	      {
	        title: 'Simple',
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
	      }
      ];
      
      this.data = [
	      {
	        id: 1,
	        description: 'Potato',
	        createdAt: new Date('2011-10-10T14:47:00'),
	        amount: 10,
	        price: 4.20
	      },
	      {
	        id: 2,
	        description: 'Pineapple apple pen',
	        createdAt: new Date(),
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
	        edit: this.onEdit
	      }
	    };
	 }
	 
	 private onEdit(data: any) {
	    console.log('Editando:', data);
	 }

}
```

## Utilisation - API

Do you want to know more? Check the docs for API [here](https://github.com/magic-software-lab/ngx-magic-table/blob/master/docs/getting-started/API.MD).

## Development

Implementing the [Angular Package Format v4.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).

Common tasks are present as npm scripts:

- `npm start` to run a live-reload server with the demo app
- `npm run test` to test in watch mode, or `npm run test:once` to only run once
- `npm run build` to build the library
- `npm run lint` to lint 
- `npm run clean` to clean
- `npm run integration` to run the integration e2e tests
- `npm install ./relative/path/to/lib` after `npm run build` to test locally in another app

## License

MIT © [Eron Rodrigues Alves](mailto:eronra@gmail.com)
