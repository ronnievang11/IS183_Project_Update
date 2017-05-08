import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
  }

  ngOnInit() {
   
  }

  goToAbout() {
    console.log('go to aboutus....;');
    this.router.navigate(['aboutus']);
  }

goToContact() {
    console.log('go to contactus....;');
    this.router.navigate(['contactus']);
  }

  goToCategory() {
    console.log('go to bookcategory....;');
    this.router.navigate(['bookcategory']);
  }
  goToLogin() {
    console.log('go to login....;');
    this.router.navigate(['login']);
  }
}