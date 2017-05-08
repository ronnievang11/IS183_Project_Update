import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books:Array<Object>;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getBooks().then((resp) => {
      this.books = resp;
    });
    console.log('books', this.books);
  }

  getBooks() {
    return this.bookService.getBooks();
  }

  getBookById(id) {
    return this.bookService.getBookById(id);
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['create']);
  }

  deleteBook(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.bookService.deleteBook(id);
  }

}
