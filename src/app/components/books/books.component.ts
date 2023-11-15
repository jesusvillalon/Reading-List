import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Book } from 'src/app/interfaces/books.interface';
import { BooksService } from 'src/app/services/books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{


  public books: Book[] = [];
  genres = new FormControl('');
  genresList: string[] = [];

  constructor(private booksService: BooksService){}

  ngOnInit(): void {


  }



}




