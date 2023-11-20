import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksListComponent,
    DashboardComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
