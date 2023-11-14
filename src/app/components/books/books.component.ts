import { Component, OnInit } from '@angular/core';
import { Book, Books } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  public books: Book[] = [];

  constructor(private booksService: BooksService){}
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.booksService.getBooks()
      .subscribe((library) => {
        this.books = library;
      });
  }


  onSubmit(book: Book) {
    this.booksService.addBookToReadingList(book);
  }

}




