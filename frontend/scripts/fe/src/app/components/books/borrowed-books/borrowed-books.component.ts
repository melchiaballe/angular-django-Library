import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/commons/services/books/books.service';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';

import { SearchForm } from 'src/app/commons/forms/search.forms';
import { SearchModel } from 'src/app/commons/models/search.model';


@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {

  private form: SearchForm;
  books_list: any;
  all_books: any;

  constructor(
    private nav: NavigationService,
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.nav.changeHeaderTitle('Borrowed Books');
    this.form = new SearchForm(new SearchModel);

    this.booksService.getAllBooks().subscribe(
      data => {
        this.all_books = data;
        this.books_list = this.all_books;
        console.log(data)
      }, error => {
        console.log(error)
      }
    )

  }

  onSubmit({ value, valid }: { value: SearchModel, valid: boolean }) {
    if(valid){
      this.books_list = this.all_books.filter(x => x.title.includes(value.search_text));
    }else{
      if (value.search_text === '') {
        this.books_list = this.all_books;
      }
    }
  }

}
