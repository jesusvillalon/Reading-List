import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit{
  public books: Book[] = [];
  public filteredBook: Book[] = [];

  constructor(private booksService: BooksService){}
  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.booksService.getBooks()
      .subscribe((library) => {
        this.books = library;
        this.filteredBook = library;
      });
  }

  onSubmit(book: Book) {
    this.booksService.addBookToReadingList(book);
  }

  applyFilter(selectedGenres: string[]) {
    if (selectedGenres.length === 0) {
      this.filteredBook = this.books;
    } else {
      this.filteredBook = this.books.filter((book) => {
        return selectedGenres.some((genre) => {
          return Array.isArray(book.genre) ? book.genre.includes(genre) : book.genre === genre;
        });
      });
    }
  }


}
