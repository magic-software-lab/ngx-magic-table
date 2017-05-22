# ngx-magic-table - API
### Magic Software

## Utilisation

For config ngx-magic-table is simple and It's magic!

Actually, there are three inputs to component:

* Columns,
* Data,
* tableOptions;

```xml
<ngx-magic-table [columns]="columns" [data]="data" [tableOptions]="tableOptions"> </ngx-magic-table>
```

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

### Format 

Format depends wich type value is on column.
Actually, ngx-magic-table supports **date** and **number** types to format.

#### Date

For date type, the value for format is a string.
It supports typescript **Date** object and string value in 
[ISO8601 Format Date](https://en.wikipedia.org/wiki/ISO_8601).

[Javascript String Pattern Format Date](http://depressedpress.com/javascript-extensions/dp_dateextensions/)


Example: 

```json
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

```json
 {
	createdAt: new Date('2011-10-10T14:47:00')
 }
```

* String ISO8601

```json
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

```json
 {
    field: 'amount',
    title: 'Amount',
    format: {
      digits: '1.2-2' // * format
    }
 }
```

* CurrencyPipe:

```json
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

```json
 {
	price: 10.89
 }
```




