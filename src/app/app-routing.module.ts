import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Components/home/home.component";
import { SearchComponent } from "./Components/search/search.component";
import { FavoritesComponent } from "./Components/favorites/favorites.component";
import { BookDetailsComponent } from "./Components/book-details/book-details.component";
import { AuthGuard } from "./sherd/auth.guard";

///, canActivatess: [AuthGuard]
const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "search",
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  { path: "favorite", component: FavoritesComponent, canActivate: [AuthGuard] },
  {
    path: "details",
    component: BookDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
