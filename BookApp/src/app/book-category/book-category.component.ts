import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';

@Component({
  selector: 'book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
books:Array<Object>;

  constructor(
    private categoryService: CategoryService,
  ) { 
  }

  ngOnInit() {
    this.getBooks().then((resp) => {
      this.books = resp;
    });
    console.log('books', this.books);
  }

  getBooks() {
    return this.categoryService.getBooks();
  }

  getBookById(id) {
    return this.categoryService.getBookById(id);
  }

  deleteBook(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.categoryService.deleteBook(id);
  }

}
