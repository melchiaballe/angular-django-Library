import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
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
  has_error:boolean = false;
  book:any;
  
  constructor(
    private booksService: BooksService
  ) {
    super()
   }

  ngOnInit() {
  }


  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }

  borrowBook(){
    console.log(this.book)
    // ADD SIMPLEMODAL SERVICE CONFIRMATION BEFORE CALL
    this.booksService.checkoutBook({book_id: this.book.id}).subscribe(
      data => {
        this.book.status='checked out'
      }, error => {
        console.log(error)
      }
    )
  }

}
