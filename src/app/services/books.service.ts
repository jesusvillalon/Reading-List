import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book, BookWithId, Books, Library } from '../interfaces/books.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl: string = 'assets/data/books.json';
  private readingList: BookWithId[] = [];

  constructor(private http: HttpClient) {
    const storedReadingList = localStorage.getItem('readingList');
    this.readingList = storedReadingList ? JSON.parse(storedReadingList) : [];
   }


  getBooks(): Observable<Book[]> {
    return this.http.get<Books>(this.baseUrl).pipe(
      map(response => response.library.map(item => item.book))
    );
  }

  getReadingList(): BookWithId[] {
    return this.readingList;
  }

  addBookToReadingList(book: Book){
    const isBookAdded = this.readingList.find(b => b.title === book.title)
    if(isBookAdded){
      return;
    } else{
      const bookWithId = {...book, id: uuidv4()};
      this.readingList.push(bookWithId);
      localStorage.setItem('readingList', JSON.stringify(this.readingList))
    }
  }

  deleteBookFromReadingList(bookId: string){
    this.readingList = this.readingList.filter(book => book.id !== bookId);
    localStorage.setItem('readingList', JSON.stringify(this.readingList));
  }

  getBooksByGenre(genre: string): Observable<Book[]> {
    return this.getBooks().pipe(
      map(books => books.filter(book => book.genre.includes(genre)))
    );
  }


}
