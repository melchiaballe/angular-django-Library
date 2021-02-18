import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
// import { DatePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';

import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { UserService } from 'src/app/commons/services/auth/user.service';
import { BooksService } from 'src/app/commons/services/books/books.service';
import { SimpleModalService } from "ngx-simple-modal";

import { BookDetailsComponent } from '../../partials/modals/book-details/book-details.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // private pipe = new DatePipe('en-US');

  books_list:any;

  constructor(
    private nav: NavigationService,
    private auth: AuthService,
    private state: StateService,
    private booksService: BooksService,
    private simpleModalService:SimpleModalService
  ) { }

  async ngOnInit() {

    this.nav.changeHeaderTitle('Dashboard');

    setTimeout(() => {
      this.nav.hasLoaded = false
    }, 100)

    this.auth.getUser();

    if (this.auth.user.id == null) {
      // get user information from the backend. (sync)
      await this.auth.setuser();
    }


    this.booksService.getAllBooks().subscribe(
      data => {
        this.books_list = data
        console.log(data)
      }, error => {
        console.log(error)
      }
    )

  }


  rowClicked(book){
    console.log(book)
    this.simpleModalService.addModal(BookDetailsComponent, {
      has_error: false,
      book:book
    })
    .subscribe((isConfirmed)=>{
        //We get modal result
        if(isConfirmed) {
            alert('accepted');
        }
        else {
            alert('declined');
        }
    });
  }
}
