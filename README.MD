# ngx-magic-table

## Installation

To install this library, run:

```bash
$ npm install ngx-magic-table --save
```

## Using

You can import your library in any Angular application by running:

```bash
$ npm install ngx-magic-table
```

In your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NgxMagicTableModule } from 'ngx-magic-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Module
    NgxMagicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once is imported, you can use its components in your Angular application:

```xml
<!-- You can now use in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-magic-table></ngx-magic-table>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Eron Rodrigues Alves](mailto:eronra@gmail.com)
