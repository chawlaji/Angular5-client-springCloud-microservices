import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http } from "@angular/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountsComponent } from './accounts/accounts.component';
import { DocumentsComponent } from './documents/documents.component';
import { AppRoutes } from './app.routing.module';
import { DataFetch } from './datafetch.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AccountsComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataFetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
