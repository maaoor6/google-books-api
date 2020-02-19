import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/sherd/Models/book";
import { Router } from "@angular/router";
import { BooksService } from "src/app/sherd/books.service";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"]
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private route: Router, private booksService: BooksService) {}

  ngOnInit() {
    this.book = this.booksService.currentBook;
  }
  
}
