import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(    
    private router: Router
) { }

  ngOnInit() {
  }
goToCategory() {
    console.log('go to bookcategory....;');
    this.router.navigate(['bookcategory']);
  }
}
