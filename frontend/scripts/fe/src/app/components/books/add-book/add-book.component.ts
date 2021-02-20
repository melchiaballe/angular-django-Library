import { Component, OnInit } from '@angular/core';
import { BookForm } from 'src/app/commons/forms/books.forms';
import { Books } from 'src/app/commons/models/book.model';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { BooksService } from 'src/app/commons/services/books/books.service';
import { NavigationService } from 'src/app/commons/services/navigation/navigation.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  private form: BookForm;
  private default_status='available';

  constructor(
    private nav: NavigationService,
    private booksService: BooksService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.nav.changeHeaderTitle('Add Book');
    this.form = new BookForm(new Books);
    this.form.form.controls['status'].setValue(this.default_status);
  }

  onSubmit({ value, valid }: { value: Books, valid: boolean }) {
    if(valid){
      this.booksService.addBook(value).subscribe(
        data => {
          alert("IT IS SAVED")
        }, error => {
          alert("PLEASE SEE ERROR MESSAGE")
        }
      )
    }
  }

}
