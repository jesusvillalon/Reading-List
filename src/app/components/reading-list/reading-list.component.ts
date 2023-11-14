import { Component, OnInit } from '@angular/core';
import { BookWithId } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit{
  public readingList: BookWithId[] = [];

  constructor(private booksService: BooksService){}

  ngOnInit(): void {
    this.getReadingList()
  }

  getReadingList(){
    this.readingList = this.booksService.getReadingList();
  }

  deleteBook(book: BookWithId){
    this.booksService.deleteBookFromReadingList(book.id);
    this.getReadingList();
  }
}
