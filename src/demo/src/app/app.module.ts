import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule, PaginationModule, CollapseModule, TabsModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NgxMagicTableModule } from '@magic-software/ngx-magic-table';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { DemoSectionComponent } from './demos/demo-section/demo-section.component';

import { MainDemoComponent } from './demos/main-demo-section/main-demo/main-demo.component';
import { MainDemoSectionComponent } from './demos/main-demo-section/main-demo-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    MainDemoComponent,
    MainDemoSectionComponent,
    DemoSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    InfiniteScrollModule,
    NgxMagicTableModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
