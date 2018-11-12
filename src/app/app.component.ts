import { Component } from '@angular/core';

@Component({
  selector: 'book-app',
  template: `<app-authors-component></app-authors-component> `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books-app';
}
