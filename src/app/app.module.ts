import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { from } from "rxjs";
import { HomeComponent } from "./Components/home/home.component";
import { BooksService } from "./sherd/books.service";
import { AlertifyService } from "./sherd/alertify.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavComponent } from "./Components/nav/nav.component";
import { AuthGuard } from "./sherd/auth.guard";
import { SearchComponent } from "./Components/search/search.component";
import { FavoritesComponent } from "./Components/favorites/favorites.component";
import { BookDetailsComponent } from "./Components/book-details/book-details.component";
import { BookComponent } from "./Components/book/book.component";
import * as _ from 'underscore';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchComponent,
    FavoritesComponent,
    BookDetailsComponent,
    BookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BooksService, AlertifyService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
