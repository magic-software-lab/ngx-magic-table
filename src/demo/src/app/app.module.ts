import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BsDropdownModule, PaginationModule, CollapseModule } from 'ngx-bootstrap';
import { SharedModule } from './shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppRoutingModule } from './app-routing.module';

import { DemoModule } from './demo/demo.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { DemosPageComponent } from './demos-page/demos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    GetStartedComponent,
    DemosPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    InfiniteScrollModule,
    Ng2PageScrollModule.forRoot(),
    SharedModule,
    DemoModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
