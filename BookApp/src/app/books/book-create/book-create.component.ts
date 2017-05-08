import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(
        private router: Router

  ) { }

  ngOnInit() {
  }

goToOrderDetail() {
    console.log('go to orderdetail....;');
    this.router.navigate(['orderdetail']);
  }
}
