import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  BOOKS, OWNED_BOOKS, ADD_BOOK, 
  CHECKOUT_BOOK, 
  COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT} from '../../constants/api.constants'
import { Books } from '../../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }


  getAllBooks(){
    return this.http.get(BOOKS);
  }

  getOwnedBooks(){
    return this.http.get(OWNED_BOOKS);
  }

  addBook(data: Books){
    return this.http.post(ADD_BOOK, data);
  }

  checkoutBook(data){
    return this.http.post(CHECKOUT_BOOK, data);
  }

  getAllComments(book_id){
    return this.http.get(COMMENTS, { params: {"book_id": book_id}});
  }

  addComment(data){
    return this.http.post(ADD_COMMENT, data);
  }

  deleteComment(data){
    return this.http.post(DELETE_COMMENT, data);
  }
}
