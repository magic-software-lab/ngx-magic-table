import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';

import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    NgxMagicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
