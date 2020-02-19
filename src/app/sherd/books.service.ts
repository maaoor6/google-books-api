import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { BehaviorSubject } from "rxjs";
import { Book } from "./Models/book";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  private _books = new BehaviorSubject<Book[]>([]);
  private dataStore: { Books: Book[] } = { Books: [] };
  readonly books = this._books.asObservable();
  public currentBook: Book;
  private queryParm = "q";
  public favorites: Book[] = [];
  constructor(private httpClient: HttpClient) {}

  search(query: string) {
    var url = `${environment.apiUrl}?${this.queryParm}=${query}`;
    return this.httpClient
      .get(url)
      .pipe(
        map((data: any) =>
          data.items.map(
            (item: any) =>
              new Book(
                item.id,
                item.volumeInfo.title,
                item.volumeInfo.authors,
                item.volumeInfo.publishedDate,
                item.volumeInfo.imageLinks
              )
          )
        )
      )
      .subscribe(data => {
        this.dataStore.Books = data;
        this._books.next(Object.assign({}, this.dataStore).Books);
      });
  }

  setCurrentBook(book: Book) {
    this.currentBook = book;
  }

  addToFavorites(book: Book) {
    this.favorites.push(book);
  }
  removeFromFavorites(book: Book) {
    var index = this.favorites.indexOf(book);

    if (index !== null) {
      this.favorites.splice(index, 1);
    }
  }
}
