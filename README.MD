# Magic Software - ngx-magic-table

Easy to use table for Angular(4.x.x), it's magic!!

* Warning

This library is in alpha testing, there are some issues to fix and new features will be implemented.

[![Build Status](https://travis-ci.org/magic-software-lab/ngx-magic-table.svg?branch=master)](https://travis-ci.org/magic-software-lab/ngx-magic-table)
[![codecov](https://codecov.io/gh/magic-software-lab/ngx-magic-table/branch/master/graph/badge.svg)](https://codecov.io/gh/magic-software-lab/ngx-magic-table)

## Installation

To install this library, run:

```bash
$ npm install @magic-software/ngx-magic-table --save
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
