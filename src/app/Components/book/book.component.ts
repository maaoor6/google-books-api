import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/sherd/Models/book";
import { Router } from "@angular/router";
import { BooksService } from "src/app/sherd/books.service";
import { AlertifyService } from "src/app/sherd/alertify.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() ShowFavoritesIcon: boolean = true;

  constructor(
    private route: Router,
    private booksService: BooksService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit() {}
  addToFavorite(book: Book) {
    this.booksService.addToFavorites(book);
    this.alertifyService.success("book add to favorite");
  }
  bookDetails(book: Book) {
    this.booksService.setCurrentBook(book);
    this.route.navigate(["details"]);
  }
}
