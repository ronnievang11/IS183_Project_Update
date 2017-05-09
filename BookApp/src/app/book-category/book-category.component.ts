import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
books:Array<Object>;

  constructor(
    private categoryService: CategoryService,
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
    return this.categoryService.getBooks();
  }

  getBookById(id) {
    return this.categoryService.getBookById(id);
  }

  deleteBook(id:string) {
    console.log(`deleting book with id of : ${id}`);
    this.categoryService.deleteBook(id);
  }

goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['create']);
  }
  goToCart() {
    console.log('go to cart....;');
    this.router.navigate(['cart']);
  }
}
