import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(    
    private router: Router
) { }

  ngOnInit() {
  }
goToProfile() {
    console.log('go to profile....;');
    this.router.navigate(['profile']);
  }
}
