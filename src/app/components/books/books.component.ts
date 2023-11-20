import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Book } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';
import { BooksListComponent } from '../books-list/books-list.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  @ViewChild(BooksListComponent) booksListComponent!: BooksListComponent;

  public books: Book[] = [];
  public filteredBooks: Book[] = [];
  public genres = new FormControl('');
  public allGenres: string[] = [];

  constructor(private booksService: BooksService){}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.booksService.getBooks()
    .subscribe((library) => {
      this.books = library;
      this.filteredBooks = this.books;
      this.allGenres = this.extractAllGenres(library);
    });

  this.genres.valueChanges.subscribe(() => {
    this.filterBooksByGenre();
  });
  }

  private extractAllGenres(library: Book[]): string[] {
    const genres: string[] = [];
    library.forEach((book) => {
      if (Array.isArray(book.genre)) {
        book.genre.forEach((genre) => {
          if (!genres.includes(genre)) {
            genres.push(genre);
          }
        });
      } else {
        if (!genres.includes(book.genre)) {
          genres.push(book.genre);
        }
      }
    });
    return genres;
  }


  filterBooksByGenre() {
    const selectedGenres = this.genres.value;
    if (!selectedGenres || !Array.isArray(selectedGenres)) {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter((book) => {
        return selectedGenres.some((genre) => {
          return Array.isArray(book.genre) && book.genre.includes(genre);
        });
      });
    }
  }

  applyFilterByGenre() {
    const selectedGenres = Array.isArray(this.genres.value) ? this.genres.value : [this.genres.value];
    this.booksListComponent.applyFilter(selectedGenres.filter((genre): genre is string => typeof genre === 'string'));
  }


}




