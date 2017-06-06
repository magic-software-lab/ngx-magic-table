
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { BsDropdownModule, PaginationModule } from 'ngx-bootstrap';
import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

@NgModule({
  declarations: [
    
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
  bootstrap: []
})
export class AppModule { }

