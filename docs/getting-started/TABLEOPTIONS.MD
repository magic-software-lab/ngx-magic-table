# ngx-magic-table - API
### Magic Software

## Table Options

Table Options is use to define behaviours and actions for Magic Table.

Definition:

```typescript
interface MagicTableOptions {
    pagination?: {
	  page: number;
	  itemsPerPage: number;
	  maxSize: number;
	  numPages: number;
	  length: number;
	};
    api?: Object;
}
```

* **pagination***: object to config pagination.
* **api***: object to config callback api.

### *Pagination

Define config to pagination.

```typescript
interface MagicTableOptions {
    pagination?: {
	  page: number;
	  itemsPerPage: number;
	  maxSize: number;
	  numPages: number;
	  length: number;
	};
}
```

* **page**: the default page after the table component loading.
* **itemsPerPage**: number of the displaying items (rows) on a page.
* **maxSize**: number of the displaying pages before ...
* **numPages**: total number of the pages.
* **length**:  total number of the items after filtering (of it's chosen).

### *Api

Define functions to call callbacks on column definition.

```typescript
interface MagicTableOptions {
    api?: Object;
}
```

Example:

AppComponent

```typescript
this.tableOptions = {
  api: {
    edit: this.onEdit
  }
};
 
	 
private onEdit(data: any) {
	console.log('Editing:', data);
}

```

#### Params:

Data respective on row clicked.




