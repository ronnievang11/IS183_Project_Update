import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bookmore',
  templateUrl: './bookmore.component.html',
  styleUrls: ['./bookmore.component.css']
})
export class BookmoreComponent implements OnInit {

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

  deleteBook(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.bookService.deleteBook(id);
  }
goToCart() {
    console.log('go to cart....;');
    this.router.navigate(['cart']);
  }
}
