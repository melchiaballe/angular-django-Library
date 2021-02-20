import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOKS, OWNED_BOOKS, ADD_BOOK } from '../../constants/api.constants'
import { Books } from '../../models/book.model'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }


  getAllBooks(){
    return this.http.get(BOOKS)
  }

  getOwnedBooks(){
    return this.http.get(OWNED_BOOKS)
  }

  addBook(data: Books){
    return this.http.post(ADD_BOOK, data)
  }
}
