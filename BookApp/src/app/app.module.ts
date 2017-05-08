import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

// service
import { BookService } from './books/book.service';
import { CategoryService } from './book-category/category.service';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookComponent } from './books/book/book.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecentlyOrderComponent } from './recently-order/recently-order.component';


// Routes
const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'cart', component: BookCreateComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'contactus', component: ContactUsComponent},
  { path: 'orderdetail', component: OrderDetailComponent},
  { path: 'bookcategory', component: BookCategoryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'recentlyorder', component: RecentlyOrderComponent},





];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    MainNavComponent,
    MainFooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    OrderDetailComponent,
    BookCategoryComponent,
    LoginComponent,
    ProfileComponent,
    RecentlyOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
