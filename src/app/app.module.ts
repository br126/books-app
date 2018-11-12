import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';
import {AuthorsComponent} from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    AuthorComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
