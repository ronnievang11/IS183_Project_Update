import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'bookone',
  templateUrl: './bookone.component.html',
  styleUrls: ['./bookone.component.css']
})
export class BookoneComponent implements OnInit {
books:Array<Object>;

  constructor(
    private bookService: BookService,

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

  deleteBook(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.bookService.deleteBook(id);
  }

}
