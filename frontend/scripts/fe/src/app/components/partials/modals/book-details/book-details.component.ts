import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { CommentForm } from 'src/app/commons/forms/comment.forms';
import { CommentModel } from 'src/app/commons/models/comment';
import { AuthService } from 'src/app/commons/services/auth/auth.service';
import { BooksService } from 'src/app/commons/services/books/books.service';
export interface ConfirmModel {
  has_error:boolean,
  book:any
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent extends SimpleModalComponent<ConfirmModel, boolean> implements OnInit {

  private form: CommentForm;
  has_error:boolean = false;
  book:any;
  comments_list: any;

  constructor(
    private booksService: BooksService,
    private authService: AuthService
  ) {
    super()
   }

  ngOnInit() {
    this.booksService.getAllComments(this.book.id).subscribe(
      data => {
        this.comments_list = data;
      }, error => {
        console.log(error);
      }
    );

    this.intializeForm();
  }


  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }

  borrowBook(){
    // ADD SIMPLEMODAL SERVICE CONFIRMATION BEFORE CALL
    this.booksService.checkoutBook({book_id: this.book.id}).subscribe(
      data => {
        this.book.status = 'checked out';
      }, error => {
        console.log(error);
      }
    );
  }

  intializeForm() {
    this.form = new CommentForm(new CommentModel);
    this.form.form.controls['book_id'].setValue(this.book.id);
    this.form.form.controls['user'].setValue(this.authService.user_id);
  }

  onSubmit({ value, valid }: { value: CommentModel, valid: boolean }) {
    if(valid){
      this.booksService.addComment(value).subscribe(
        data => {
          this.comments_list.unshift(data);
          this.intializeForm();
        }, error => {
          console.log(error);
          this.intializeForm();
        }
      )
    }
  }

  deleteClick(comment_id) {
    this.booksService.deleteComment({'comment_id': comment_id}).subscribe(
      data => {
        this.comments_list = this.comments_list.filter(x => x.id !== comment_id);
      }, error => {
        console.log(error);
      }
    );
  }


}
