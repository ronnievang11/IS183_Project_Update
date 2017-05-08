import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'recently-order',
  templateUrl: './recently-order.component.html',
  styleUrls: ['./recently-order.component.css']
})
export class RecentlyOrderComponent implements OnInit {

  constructor(
        private router: Router

  ) { }

  ngOnInit() {
  }
goToProfile() {
    console.log('go to profile....;');
    this.router.navigate(['profile']);
  }
  goToRecentlyOrder() {
    console.log('go to recentlyorder....;');
    this.router.navigate(['recentlyorder']);
  }
}
