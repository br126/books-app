import { Component } from '@angular/core';
import {Book} from '../model/book.model';




@Component({
  selector: `books`,
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  {


  books: Book[] = [
    new Book(1, 'titleeeee', 'author', 'description', 'imageURL', true, false ),
    new Book(1, 'titleeeee', 'author', 'description', 'imageURL', true, true ),
    new Book(1, 'titleeeee', 'author', 'description', 'imageURL', true, true )
    ];




}


