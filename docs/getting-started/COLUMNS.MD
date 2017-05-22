# ngx-magic-table - API
### Magic Software

## Columns

Columns is a array of MagicTableColumn, wich is a interface to declare how will be the behavior of each column of table.

NgxMagicTable treats each datatype with a bind directive to alignment and format values.

Definition:

```typescript
interface MagicTableColumn {
    field?: string;
    title?: string;
    format?: any;
    align?: string;
    sort?: string;
    actions?: MagicTableActions;
}
```

* **field**: name of field in data collection.
* **title**: title of column.
* **format***: string or object to format data before show.
* **align***: 'right', 'left' or 'center'.
* **sort**: 'asc' or 'desc'.
* **actions***: implements button to call actions (Simple, Group and Dropdown).

### *Format 

Format depends wich type value is on column.
Actually, ngx-magic-table supports **date** and **number** types to format.

#### Date

For date type, the value for format is a string.
It supports typescript **Date** object and string value in 
[ISO8601 Format Date](https://en.wikipedia.org/wiki/ISO_8601).

[Javascript String Pattern Format Date](http://depressedpress.com/javascript-extensions/dp_dateextensions/)


Example: 

```javascript
  ...
  {
    field: 'createdAt',
    title: 'Created at',
    format: 'dd/MM/yyyy HH:mm' // * format
  }
  ...
```

Values:

* Date Object

```javascript
 {
	createdAt: new Date('2011-10-10T14:47:00')
 }
```

* String ISO8601

```javascript
 {
	createdAt: '2011-10-10T14:47:00'
 }
```

#### Number

For number type the ngx-magic-table using pipes provides by angular to format.

- [DecimalPipe](https://angular.io/docs/ts/latest/api/common/index/DecimalPipe-pipe.html).
- [CurrencyPipe](https://angular.io/docs/ts/latest/api/common/index/CurrencyPipe-pipe.html).

It's necessary to declare format using the pattern object for this pipes:

* DecimalPipe:

```javascript
 {
    field: 'amount',
    title: 'Amount',
    format: {
      digits: '1.2-2' // * format
    }
 }
```

* CurrencyPipe:

```javascript
 {
	field: 'price',
	title: 'Price',
	format: {
	  currencyCode: 'BRL',
	  symbolDisplay: true,  // * format
	  digits: '1.2-2'
	}
 }
```

Value:

```javascript
 {
	price: 10.89
 }
```

### *Align 

The Magic Table uses the alignment pattern datatable to align values depends type of value in each column ***per default***.

Resume:

1. Numerical data is right-aligned
2. Textual data is left-aligned
3. Headers are aligned with their data
4. Don’t use center alignment.

You can read more [here](https://medium.com/mission-log/design-better-data-tables-430a30a00d8c).

If you are brave and you want to force align, it's possible to define align in column definition:

```javascript
  {
    field: 'amount',
    title: 'Amount',
    align: 'left' // WRONG PATTERN BUT YOU CAN DO THAT.
  }
```

### *Actions

Actions define buttons to ***Call to Action***.
In must datatables is create action columns to remove rows or navigate to edit page.

Actually, Magic Table provides specific ***easy-to-use*** types of buttons.

#### Simple Button

```javascript
	...,
 {
    title: 'Edit',
    actions: {
      type: 'simple', // action type
      buttons: [
        {
          title: 'Edit',
          styleClass: 'btn btn-primary',
          styleIcon: 'fa fa-pencil',
          action: 'edit' // callback action name
        }
      ]
    }
  },
  ...
```

#### Button Group

```javascript
  ...,
  {
    title: 'Actions',
    actions: {
      type: 'group', // action type
      buttons: [
        {
          title: 'Edit',
          styleClass: 'btn btn-primary',
          action: 'edit'
        },
        {
          title: 'Delete',
          styleClass: 'btn btn-danger',
          action: 'delete'
        }
      ]
    }
  },
  ...
```

#### Dropdown

```javascript
  ...,
  {
    title: 'Dropdown',
    actions: {
      type: 'dropdown', // action type
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
   ...
```

For declare actions callbacks is must to declare in TableOptions.

Example:

```javascript
  tableOptions = {
      api: {
        edit: this.onEdit,
        delete: this.onDelete.bind(this) // if necessary to keep context
      }
  };
  
  ...
  
  private onEdit(data: any) {
    console.log('Editando:', data);
  }

  private onDelete(data: any) {
    console.log('Excluindo:', data);
  }
```

See the [TableOptions docs](https://github.com/magic-software-lab/ngx-magic-table/blob/master/docs/getting-started/TABLEOPTIONS.MD) for more information how to configure callbacks.


