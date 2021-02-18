import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
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
  
  constructor() {
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

}
