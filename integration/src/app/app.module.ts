import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, NgxMagicTableModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
