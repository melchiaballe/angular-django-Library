import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/commons/services/books/books.service';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  constructor(
    private nav: NavigationService,
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.nav.changeHeaderTitle('Borrowed Books');
  }

}
