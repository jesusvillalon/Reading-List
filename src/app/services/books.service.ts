import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, map, tap } from 'rxjs';
import { Book, Books } from '../interfaces/books.interface';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl: string = 'assets/data/books.json';
  private readingList: Book[] = [];

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Books>(this.baseUrl).pipe(
      map(response => response.library.map(item => item.book))
    );
  }

  getReadingList(): Book[] {
    return this.readingList;
  }

  addBookToReadingList(book: Book){
    this.readingList.push(book)
  }


}
