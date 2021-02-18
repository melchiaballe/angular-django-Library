import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BOOKS } from '../../constants/api.constants'


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
}
