import { Component, OnInit } from '@angular/core';
import { BookForm } from 'src/app/commons/forms/books.forms';
import { Books } from 'src/app/commons/models/book.model';
import { BooksService } from 'src/app/commons/services/books/books.service';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private form: BookForm;

  constructor(
    private nav: NavigationService,
    private booksService: BooksService,
  ) { }

  ngOnInit() {
    this.nav.changeHeaderTitle('Add Book');
    this.form = new BookForm(new Books);
  }

  onSubmit({ value, valid }: { value: Books, valid: boolean }) {
  }

}
