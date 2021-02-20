import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { BooksService } from 'src/app/commons/services/books/books.service';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';
import { BookDetailsComponent } from '../../partials/modals/book-details/book-details.component';

import { SearchForm } from 'src/app/commons/forms/search.forms';
import { SearchModel } from 'src/app/commons/models/search.model';

@Component({
  selector: 'app-owned-books',
  templateUrl: './owned-books.component.html',
  styleUrls: ['./owned-books.component.css']
})
export class OwnedBooksComponent implements OnInit {

  books_list:any;
  all_books:any;
  private form: SearchForm;

  constructor(
    private nav: NavigationService,
    private booksService: BooksService,
    private simpleModalService: SimpleModalService
  ) { }

  ngOnInit() {
    this.nav.changeHeaderTitle('Owned Books');
    this.form = new SearchForm(new SearchModel);

    this.booksService.getOwnedBooks().subscribe(
      data => {
        this.all_books = data;
        this.books_list = this.all_books;
        console.log(data)
      }, error => {
        console.log(error)
      }
    )
  }

  filterClick(event, status){
    event.preventDefault();
    if (status === 'all') {
      this.books_list = this.all_books;
    } else {
      this.books_list = this.all_books.filter(x=>x.status===status);
    }

    this.form.form.controls['search_text'].setValue(null);
  }

  rowClicked(book){
    console.log(book)
    this.simpleModalService.addModal(BookDetailsComponent, {
      has_error: false,
      book:book
    })
    .subscribe((isConfirmed)=>{
        //We get modal result
        // if(isConfirmed) {
        //     alert('accepted');
        // }
        // else {
        //     alert('declined');
        // }
    });
  }

  onSubmit({ value, valid }: { value: SearchModel, valid: boolean }) {
    if(valid){
      this.books_list = this.all_books.filter(x => x.title.includes(value.search_text))
    }
  }

}
