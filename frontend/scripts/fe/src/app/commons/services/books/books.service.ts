import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  BOOKS, OWNED_BOOKS, ADD_BOOK, 
  CHECKOUT_BOOK, 
  COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  IS_CHECKED_OUT,
  BORROWED_BOOKS,
  RETURN_BOOK,
  UPDATE_BOOK} from '../../constants/api.constants'
import { Books } from '../../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }


  getAllBooks() {
    return this.http.get(BOOKS);
  }

  getBorrowedBooks() {
    return this.http.get(BORROWED_BOOKS);
  }

  getOwnedBooks() {
    return this.http.get(OWNED_BOOKS);
  }

  addBook(data: Books) {
    return this.http.post(ADD_BOOK, data);
  }

  updateBook(data: Books) {
    return this.http.put(UPDATE_BOOK, data);
  }

  checkoutBook(data) {
    return this.http.post(CHECKOUT_BOOK, data);
  }

  getAllComments(book_id) {
    return this.http.get(COMMENTS, { params: {'book_id': book_id}});
  }

  addComment(data) {
    return this.http.post(ADD_COMMENT, data);
  }

  deleteComment(data) {
    return this.http.post(DELETE_COMMENT, data);
  }

  isCheckedOut(book_id) {
    return this.http.get(IS_CHECKED_OUT, { params: {'book_id': book_id}});
  }

  returnBook(data) {
    return this.http.post(RETURN_BOOK, data);
  }

}
