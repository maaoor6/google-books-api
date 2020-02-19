import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/sherd/api.service";
import { BooksService } from "src/app/sherd/books.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.search("flowers");
  }
}
