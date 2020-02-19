import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/sherd/books.service";
import { Book } from "src/app/sherd/Models/book";
import { PagerService } from 'src/app/sherd/Pager.service';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  query: string;
  books: Book[] = [];
  pager: any = {};
  pagedItems: any[];

  constructor(private booksService: BooksService, private pagerService: PagerService) {}

  ngOnInit() {}

  searchBook() {
    this.booksService.books.subscribe(books => {
      this.books = books;

      if (this.books.length > 0){
          this.setPage(1);
      }
     
    });
    this.booksService.search(this.query);
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.books.length, page);

    // get current page of items
    this.pagedItems = this.books.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  
}
