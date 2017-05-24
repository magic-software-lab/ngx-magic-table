import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule, PaginationModule, CollapseModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    InfiniteScrollModule,
    NgxMagicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
