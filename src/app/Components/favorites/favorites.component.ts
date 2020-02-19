import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/sherd/books.service";
import { Book } from "src/app/sherd/Models/book";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  favorites: Book[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.favorites = this.booksService.favorites;
  }
}
